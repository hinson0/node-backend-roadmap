// .then(() => {
//   return 123
// })

// 下一个.then() 只能拿到一个promise{pending...} 永远无法拿到123

// .then(() => {
//   return Promise.resolve(123)
// })

// 下一个.then()的value 可以拿到123

// .then(() => {
//   throw new Error('boom')
// })

// 这个会进入catch

// // 这三种情况下，下一个 .then() / .catch() 分别会发生什么。 这是理解 Promise 链真正的核心

function foo() {
  return new Promise((resolve, reject) => {
    resolve(1)
  })
}

foo()
  .then((value) => {
    console.log(value)
  })
  .then((value) => {
    return 123
  })
  .then((value) => {
    console.log(value)
  })
  .then(() => {
    return Promise.resolve(456)
  })
  .then((value) => {
    console.log(value)
  })
  .then(() => {
    // throw new Error('boom')
    // 完全等价下面的这句 promise.reject(new error())
    return Promise.reject(new Error('boom'))
  })
  .catch((error) => {
    console.error(error)
  })
