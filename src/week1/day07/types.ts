type User = {
  id: number
  name: string
  nickname?: string | null
}

const user: User = {
  id: 1,
  name: 'yangzhibing',
  nickname: 'yangzi',
}

function getUser(): Promise<User> {
  const yzb: User = {
    id: 1,
    name: 'yangzhibing',
    nickname: 'yangzi',
  }
  return Promise.resolve(yzb)
}

// 订单类型
type Order = {
  // id userId amount
  id: number
  userId: number
  amount: number
}

function getOrders(userId: number): Promise<Order[]> {
  // mock 2个order {id, userId, amout}
  const orders: Order[] = [
    { id: 1, userId: userId, amount: 29.0 },
    { id: 2, userId: userId, amount: 39.0 },
  ]
  return Promise.resolve(orders)
}

// Union联合类型
type Id = number | string
let id: Id

id = 1
id = 'abc'
// id = true // 这个不可以，因为id只能是string | number

// 一个订单状态
type OrderStatus = 'pending' | 'paid' | 'cancelled' // 字面量联合类型 literal union type

// 订单type
type Order2 = {
  // id, amout, OrderStatus
  id: number
  amount: number
  status: OrderStatus
}

const order: Order2 = {
  id: 1,
  amount: 99,
  status: 'paid',
}

// interface

interface Order3 {
  id: number
  amount: number
  status: OrderStatus
}
