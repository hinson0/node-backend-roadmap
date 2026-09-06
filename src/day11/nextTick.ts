// console.log('a')

// process.nextTick(() => {
//   console.log('b')
// })

// console.log('c')
// console.log('d')
// a c d b

//%%
/**
 * 同步代码 -> nextTick -> Promise -> Event Loop
 */

console.log('a')

Promise.resolve().then(() => {
  console.log('b')
})

process.nextTick(() => {
  console.log('c')
})

console.log('d')
//  a d c b
// package.json的type: commonjs的时候, 结果是 a d c b

// 如果type:module的话,结果是: a d  b c
/**
 * 理由是:
 * ESM模块顶层代码本身就是在microtask的处理过程中执行的.
 */
