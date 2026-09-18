const p = new Promise((resolve) => {
  resolve('1')
})

const p1 = Promise.resolve('1')
// 这2者是完全等价的.是吗?
console.log(p)
console.log(p1)
// Promise { '1' }
// Promise { '1' }
