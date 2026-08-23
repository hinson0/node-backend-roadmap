const p = new Promise((resolve, reject) => {
  // console.log(111)
  // reject('hehe') 如果加了这句 promise的转改改成  Promise{ <rejected> 'hehe' }
})

console.log(p) // Promise { <pending> }

// 因为没有resolve 所以永远都是pending

p.then((value) => {
  console.log(value)
}).catch((error) => {
  console.error(error) // hehe
})
