// 一张图

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

// 不是`某个阶段清microtask`,而是一个callback执行完,就清nextTick/microtask
