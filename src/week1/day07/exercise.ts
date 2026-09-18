type UserStatus = 'active' | 'disabled'

type User = {
  id: number
  name: string
  status: UserStatus
  nickname?: string | null
}

type OrderStatus = 'pending' | 'paid' | 'cancelled'

type Order = {
  // id userId amount status
  id: number
  userId: number
  amount: number
  status: OrderStatus
}

function getUser(id: number): Promise<User> {
  const user: User = {
    id: id,
    name: 'yangzhibing',
    status: 'active',
    nickname: 'yangzi',
  }
  return Promise.resolve(user)
}

async function getUser2(id: number): Promise<User> {
  // async 会自动把`return 普通值`包装成promise.resolve(普通值)
  const user: User = {
    id: id,
    name: 'yangzhibing',
    status: 'active',
    nickname: 'yangzi',
  }
  return user
}

console.log(getUser2(1)) //
// Promise {
//   { id: 1, name: 'yangzhibing', status: 'active', nickname: 'yangzi' }
// }
console.log(typeof getUser2(2)) // object
console.log(getUser2(3) instanceof Promise) // true

function getOrders(userId: number): Promise<Order[]> {
  const orders: Order[] = [
    { id: 1, userId: userId, amount: 39.1, status: 'pending' },
    { id: 2, userId: userId, amount: 31.1, status: 'cancelled' },
  ]
  return Promise.resolve(orders)
}

async function main() {
  const user = await getUser(1)
  const orders = await getOrders(user.id)

  console.log(user)
  console.log(orders)
}

// await main()
/**
 * { id: 1, name: 'yangzhibing', status: 'active', nickname: 'yangzi' }
[
  { id: 1, userId: 1, amount: 39.1, status: 'pending' },
  { id: 2, userId: 1, amount: 31.1, status: 'cancelled' }
]
 */

// console.log(main())

/**
 * 
type User = {...} 到底是在干什么？ 申明类型
Order[] 是什么意思？ 类型数组,说明这是一个数组,里面的每个元素都是Order类型
Promise<Order[]> 是什么意思？ // 这个promise返回的结果是一个数组,里面每个元素是Order类型
string | null 中的 | 是什么意思？ // 或者
'pending' | 'paid' | 'cancelled' 和普通 string 有什么区别？ // 字面量
type 和 interface 在我们今天的对象类型场景里有什么关系？ // 基本等价
 */

// 类型收窄
// prettier-ignore
type ApiResult =
  | { success: true; data: User }
  | { success: false; error: string }

function handleResult(result: ApiResult) {
  if (result.success) {
    // 这里 result 是什么类型？
    // 这里是 {data: User}
  } else {
    // 这里 result 是什么类型？
    // 这里是{error: string}
  }
}
