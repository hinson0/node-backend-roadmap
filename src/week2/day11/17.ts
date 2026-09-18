// 一张图
/**
 * Event Loop是大循环,phase是房间,callback是房间的任务;每干完一个任务,都先把卫生(nextTick/microtask)打扫下
 * 然后又是下一个任务(callbac)
 */

/**
 * js -> 同步代码 -> process.nextTick -> promise / queueMicrotask -> event loop(timer -> poll -> check)
 * -> 接下图
 */

// Event Loop
//    │
//    ├─ timers
//    │    └─ 执行一个 timer callback
//    │           ↓
//    │       nextTick
//    │           ↓
//    │       microtask
//    │
//    ├─ poll
//    │    └─ 执行一个 I/O callback
//    │           ↓
//    │       nextTick
//    │           ↓
//    │       microtask
//    │
//    └─ check
//         └─ 执行一个 setImmediate callback
//                ↓
//            nextTick
//                ↓
//            microtask

/**
 * 现在最重要的心智模型其实只有这个：
 */
// Event Loop 某阶段
//       ↓
// 取一个 callback
//       ↓
// 执行 callback
//       ↓
// 清 process.nextTick
//       ↓
// 清 microtask
//       ↓
// 取下一个 callback

/**
 * 不是`某个阶段清microtask`,而是一个callback执行完,就清nextTick/microtask
 */
// 因此可以是: timer阶段清nextTick/microtask
// timer阶段
// setTimeout callback
// ⬇
// 执行完毕
// ⬇
// 消费nextTick
// ⬇
// 消费microtask
// ⬇
// 继续timer/event loop

// 也可以是poll阶段callback阶段结束后,立即消费nextTick/microtask
// poll阶段
// readFile callback
// ⬇
// 执行完毕
// ⬇
// 消费nextTick
// ⬇
// 消费microtask
// ⬇
// 进入check phase

// 也可以是check阶段
// check 阶段
// setImmediate callback
//         ↓
// 执行完
//         ↓
// nextTick
//         ↓
// microtask
//         ↓
// 继续 Event Loop

/**
 * 以下是一个详细的全图.
 */
//         Node.js 程序启动
//                │
//                ▼
//       ┌────────────────┐
//       │   执行同步代码   │
//       └───────┬────────┘
//               │
//               ▼
//      process.nextTick 队列
//               │
//               ▼
// Promise / queueMicrotask 队列
//               │
//               ▼
//   ┌─────────────────────┐
//   │      Event Loop     │
//   └─────────┬───────────┘
//             │
//             ▼
//   ┌─────────────────────┐
//   │   ① timers 阶段     │
//   │ setTimeout          │
//   │ setInterval         │
//   └─────────┬───────────┘
//             │
//             ▼
//      执行一个 callback
//             │
//             ▼
//    process.nextTick
//             │
//             ▼
//        microtask
//             │
//             ▼
//    callback 队列还有？
//       │           │
//      有           没有
//       │           │
//       └──继续─────┘
//                   ▼
//   ┌─────────────────────┐
//   │ pending callbacks   │
//   │ 一些系统/I/O回调     │
//   └─────────┬───────────┘
//             │
//             ▼
//      执行一个 callback
//             │
//             ▼
//        nextTick
//             │
//             ▼
//        microtask
//             │
//             ▼
//   ┌─────────────────────┐
//   │      poll 阶段       │
//   │ 等待 / 处理 I/O      │
//   │ fs / socket 等       │
//   └─────────┬───────────┘
//             │
//             ▼
//      执行一个 I/O callback
//             │
//             ▼
//        nextTick
//             │
//             ▼
//        microtask
//             │
//             ▼
//   ┌─────────────────────┐
//   │      check 阶段      │
//   │   setImmediate      │
//   └─────────┬───────────┘
//             │
//             ▼
//      执行一个 callback
//             │
//             ▼
//        nextTick
//             │
//             ▼
//        microtask
//             │
//             ▼
//   ┌─────────────────────┐
//   │ close callbacks     │
//   │ socket close 等      │
//   └─────────┬───────────┘
//             │
//             ▼
//        下一轮 Event Loop
//             │
//             └───────────────┐
//                             │
//                             ▼
//                       timers ...
