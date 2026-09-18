const p1 = Promise.resolve()

console.log(p1) // Promise {undefined}

const p2 = Promise.resolve('yangzi')
console.log(p2) // Promise { 'yangzi' }

const p3 = p1.then(() => {
  return 123
})

console.log(p3) // Promise { <pending> }
console.log(p3 instanceof Promise)

p3.then((value) => {
  console.log(value)
})

// 所以最准确的话是
// 回调return 123返回的是普通值.
// .then()根据这个普通值,把自己返回的新promise变成fulfilled(132)
