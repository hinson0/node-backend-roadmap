// ┌───────────────────────┐
// │ timers                │
// │ setTimeout            │
// │ setInterval           │
// ├───────────────────────┤
// │ pending callbacks     │
// ├───────────────────────┤
// │ poll                  │
// │ I/O                   │
// ├───────────────────────┤
// │ check                 │
// │ setImmediate          │
// ├───────────────────────┤
// │ close callbacks       │
// └───────────────────────┘

// timers  -> setTimeout / setInterval

// poll -> 大量 IO callback

// check -> setImmediate

// process.nextTick / Promise microtask / queueMicrotask

/**
 * 几个核心概念
 *
 *
 * poll 是指:去问一圈,收集结果.
 *
 * node可以这么理解:
 *  poll = 轮询io,看看有没有活可以干
 */

/**
 * 调用readFile / http
 * ↓
 * 操作系统 / libuv 去干IO
 * ↓
 * IO完成
 * ↓
 * libuv得知`完成了`
 * ↓
 * 把对应的callback标记为可执行
 * ↓
 * event loop到poll阶段
 * ↓
 * 执行callback
 *
 * I/O是OS/libuv干的;libuv把`完成的IO`交给event loop;event loop在poll阶段处理.
 * poll是event loop的一个阶段
 */
