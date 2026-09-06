import { readFile } from 'node:fs'

readFile(import.meta.filename, () => {
  console.log('readFile')

  setTimeout(() => {
    console.log('timeout')
  }, 0)

  setImmediate(() => {
    console.log('immediate')
  })
})

// 结果是 reaffile -> immediate -> timeout

/**
 * 我现在总算明白了.
 * 为什么结果是readFile -> immediate -> timeout了
 *
 * event loop会不断按阶段去循环执行.
 * 而这个阶段的顺序是: timers -> poll -> check
 *
 * NOTE: check是event loop专门执行setImediate()回调的阶段.
 * 你现在人在poll阶段,下一站就是check.所以就是`近水楼台先得月`
 */

// timer 房间
//    ↓
// ...
// poll 房间      ← 处理 I/O，比如 readFile 回调
//    ↓
// check 房间     ← 专门处理 setImmediate
//    ↓
// ...
// 下一圈

// Event Loop 现在人在 poll 房间

// poll
// │
// │ 执行 readFile callback
// │
// ├── setTimeout(...)
// │     把任务放到 timer 那边
// │
// └── setImmediate(...)
//       把任务放到 check 房间

// setImmediate(() => {
//     console.log('immediate')
//   })
// event loop从poll阶段进入check阶段
// event loop -> 我现在处理poll -> poll处理完 -> 我去处理check -> 看看有没有setImediate -> 有 -> 执行它

//              Event Loop 巡逻员
//                     ↓
//               【poll 收发室】
//                     ↓
//             拿到 readFile 快递
//                     ↓
//              执行 readFile()
//                     ↓
//           ┌─────────┴─────────┐
//           ↓                   ↓
//  setImmediate(fn)       setTimeout(fn)
//           ↓                   ↓
//    放到 check 房间        放到 timer 那边
//           ↓
//    Event Loop 下一站
//           ↓
//        【check】
//           ↓
//       执行 fn
