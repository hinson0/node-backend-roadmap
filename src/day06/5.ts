/**
 * 必填字段+可选字段?
 */

// null表示值为null 不表示可选
// 表示可选的是?

// nickname = string | null

/**
 * nickname?: string | null
 * 表示
 *  nickname 可以不输入
 *  nickname = yangzi
 *  nickname = null
 */

/**
 * undefined
 */

let nickname: string | undefined

// nickname = 'yangzi'
// nickname = undefined
// nickname = null
// nickname = 1

/**
 * nickname?:string
 * 可以理解成nickname是undefined 或者 string
 */

// const user: {
//   nickname?: string
// } = {}

// console.log(user.nickname)
// console.log(user.dddd) // 类型“{ nickname?: string; }”上不存在属性“dddd”。

/**
 * 对象数组
 */

// const orders: {
//   id: number
//   userId: number
//   amount: number
// }[] = [
//   { id: 1, userId: 1, amount: 99 },
//   { id: 2, userId: 2, amount: 99 },
// ]

/**
 * 然后你自己回答这几个就够了：

  nickname?: string | null 一共有哪几种合法情况？  3种 不传/string/null
  getUser(1) 的类型是什么？ // promise<{id: number, name: string, nickname?: string | null}>
  await getUser(1) 的类型是什么？ // {id: number, name: string, nickname?: string | null}
  await getOrders(1) 的类型是什么？ // 
  {
    id: number
    userId: number
    amount: number
  }[]
  为什么这些对象类型一直重复写很烦？ sha
 */
