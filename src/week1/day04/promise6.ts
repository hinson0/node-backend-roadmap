const p = Promise.resolve(123)

// 这里p不是123 而是一个promise
console.log(p) // Promise { 123 }

// 可以通过.then() 把123拿出来

p.then((value) => {
  console.log(value)
})

// 等价于

const p1 = new Promise((resolve, reject) => {
  resolve(123)
})
