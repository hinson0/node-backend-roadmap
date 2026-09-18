/**


foo()
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.error(error)
  })


等价

try {
  const value = await foo()
  console.log(value)
} catch (error) {
  console.log(error)
}

 */

/**
 * 理解async
 */
// 声明一个契约,且成功后返回123
async function foo(): Promise<number> {
  return 123
}

const result = foo()
console.log(result) // promise { 123 }

// 因此记住: async function 永远返回promise

// 等价
function foo2() {
  // 给我一个promise 这个promise已经成功了
  // 成功结果是123
  return Promise.resolve(123)
}

const result2 = foo2()
console.log(result2)
