// 9 async/await 和event loop

// async function main() {
//   const result = await xxx()
// }

async function main() {
  console.log('B')

  await Promise.resolve()

  console.log('C')
}

console.log('A')

main()

console.log(main())

console.log('D')

/**
 * async函数调用后会立即执行,直到遇到第一个await才暂停;main()返回的是一个promise
 *
 * 我之前的误区是:以为promise不会执行.一定要await才会执行
 *
 */
