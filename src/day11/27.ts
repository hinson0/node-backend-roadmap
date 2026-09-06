// 1
// console.log('A')

// setTimeout(() => console.log('B'), 0)

// console.log('C')

// a c b

// 2 setTimeout(fn, 0) 是不是立即执行？
// 不是 ,是event loop的timers phase 才会立即执行.

// 3 Promise .then() 属于什么？
// microtask

// 4 queueMicrotask() 是什么？ 就是microtask

// 5 普通情况下 Promise 和 setTimeout 谁先？
// promise 因为setTimeout属于event loop的timers phase.而event loop就已经晚于promise(microtask)了

// 6 await 后面的代码为什么不是马上继续？
// await 后面的代码 被加入到了microtask了.
// 而microtask 队列需要每个callback执行完毕后,才会来执行nextTick+microtask
// NOTE: await 后续会在异步 continuation / microtask 中继续。
// 这句话怎么理解???

// 7 setTimeout(fn, 1000) 是否保证 1000ms 时执行？ 不保证,理由同2

// 8 CPU 死循环会不会影响 setTimeout？
// 必须会,直接卡死.setTimeout永远不会有输出

// 9 Node Event Loop 是否意味着 JavaScript 同时执行很多 callback？
// 不是, 还是一个一个执行callback.只是event loop按phase+队列规则,一个一个取callback执行.

// 10 为什么 Node 适合 API 服务?
// node通过event loop调度io(网络io/文件io).不等io可以干其他的事情.比如接收一个又一个新的请求.
// api服务天生就是网络io的场景.
