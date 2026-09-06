console.log('1')

setTimeout(() => {
  console.log('2')

  Promise.resolve().then(() => {
    console.log('3')
  })
}, 0)

setTimeout(() => {
  console.log('4')
}, 0)

console.log('5')

// 1 5 2 3 4
// 而不是 1 5 2 4 3
/**
 * 因为callback执行完毕后,立马启动了清空microtask的动作.
 * 因此
setTimeout(() => {
  console.log('2')

  Promise.resolve().then(() => {
    console.log('3')
  })
}, 0)

打印了2之后,promise.resolve().then()注册了一个microtask
刚一注册就被清了
 */
