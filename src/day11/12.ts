/**
 * process.nextTick要小心
 */

setTimeout(() => {
  console.log('我什么时候可以执行呢?')
})

function loop() {
  process.nextTick(loop) // 永远执行下去,不会停.
}

loop()
