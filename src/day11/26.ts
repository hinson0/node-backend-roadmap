console.log('start')

// timers
setTimeout(() => {
  // callback
  console.log('timeout-1')

  // microtask
  Promise.resolve().then(() => {
    console.log('promise-in-timeout')
  })
}, 0)

//microtask
Promise.resolve().then(() => {
  // callback
  console.log('promise-1')

  // microtask
  queueMicrotask(() => {
    console.log('microtask-2')
  })
})

// queueMicrotask
queueMicrotask(() => {
  console.log('microtask-1')
})

// timer
setTimeout(() => {
  console.log('timeout-2')
}, 0)

console.log('end')

// callback 执行完
// ↓
// 开始清空 microtask 队列
// ↓
// 按照 FIFO 一个一个执行
// ↓
// 执行过程中产生的新 microtask → 放到队尾
// ↓
// 一直清到队列为空

// 我操你妈的,你怎么不说清楚来.搞得我以为callback就是直接清掉所有的microtask,
// 我就没想到queue这个事情.
