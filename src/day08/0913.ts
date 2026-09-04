// 第8天的内容: 泛型分页返回结构+为什么需要泛型

/**
 * 我特么的不知道什么是: `泛型分页返回结构`
 */

type UserStatus = 'active' | 'disabled'

type User = {
  id: number
  name: string
  status: UserStatus
  nickname?: string | null
}

type Order = {
  id: number
  userId: number
  amount: number
}

type Product = {
  id: number
  name: string
}

// 用户列表结果
type UserListResult = {
  // items: user[], total: number
  items: User[]
  total: number
}

// 订单列表
type OrderListResult = {
  // items: order[], total: number
  items: Order[]
  total: number
}

// 商品列表
type ProductListResult = {
  // items: product[], total: number
  items: Product[]
  total: number
}

/**
 * {
  items: xxx[]
  total: number
}
  这个东西一直重复,这就是泛型要解决的问题
 */

// 泛型最简单的理解

type PageResult<T> = {
  items: T[]
  total: number
}
// 这个T是指类型的变量.
// 这个T表示后来传进来的类型
// PageResult<User>表示用户分页
// PageResult<Order>表示订单分页
// PageResult<Product>表示商品分页

/**
 *
 *
 * function add(a: number) {}
 * a这个变量表示接受一个数值
 *
 *
 * PageResult<T>
 * 这个T表示接受一个类型
 *
 * PageResult<User>相当于把这个User类型的值放过去了.
 *
 */

/**
 * 为什么叫T.
 * 没有任何原因,一种习惯.每个变成语言都是叫T. 你喜欢叫Y也可以,叫OK也行,叫TypeVar也行
 * 
type PageResult<T> = {
  items: T[]
}
type PageResult<ABC> = {
  items: ABC[]
}
但有一个通俗的约定

T: 类型的变量
K: key的类型变量
V: value的类型变量
E: element的类型变量
 */
