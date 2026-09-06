// 一张图

/**
 * js -> 同步代码 -> process.nextTick -> promise / queueMicrotask -> event loop(timer -> poll -> check)
 * ->callback执行(nextTick -> microTask) -> 继续event loop
 */
