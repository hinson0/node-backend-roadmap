/**
 * 另外microtask我有一个新的理解:
 *
 * 不是await这一行放进microtask.而是await后面的继续执行的部分都放进microtask.
 * 等promise settle后,通过microtask恢复执行.
 */

async function main() {
  console.log('B') // 同步代码

  await Promise.resolve()
  // 上面的代码分2步来看
  // promise.resolve()也立即执行.
  // await 在这里暂停.

  // ---------------------
  // 真正进入micortask的是,可以理解成
  /**
   * 
    () => {
      console.log('C')
      console.log('E')
    }
   */

  /**
   * await把async函数切成了2部分,前部分+后部分.
   * 后段作为continuation(继续执行)通过microtask来恢复
   * 
   * 所以 await Promise.resolve()分为:
   * 
   * Promise.resolve()
      ↑
      立即执行
    await 后续恢复
      ↑
      microtas

    理解成:
      await前:同步执行
      await 表达式: 立即执行
      await 后: microtask恢复执行

   */

  console.log('C') //

  console.log('E')
}

console.log('A')

main()

console.log('D')

// 最后的结果是:
// a b d c e
