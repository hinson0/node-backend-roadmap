const promise = new Promise<string>((resolve, reject) => {
  console.log('promise 开始')

  setTimeout(() => {
    resolve('hello')
  }, 1000)
})

console.log(promise)

promise.then((result) => {
  console.log('结果: ', result)
})

console.log('继续执行')
