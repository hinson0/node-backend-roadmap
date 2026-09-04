type User = {
  id: number
  name: string
}

type Order = {
  // id, amout
  id: number
  amount: number
  userId: User['id']
}

type PageResult<T> = {
  // items, total
  items: T[]
  total: number
}

const users: PageResult<User> = {
  items: [
    { id: 1, name: 'abc' },
    { id: 2, name: 'efg' },
  ],
  total: 2,
}

const orders: PageResult<Order> = {
  items: [
    {
      id: 1,
      amount: 20.1,
      userId: 1,
    },
    {
      id: 2,
      amount: 321.2,
      userId: 2,
    },
  ],
  total: 2,
}

console.log(users)
console.log(orders)
/**
 * node src/day08/generic.ts
{ items: [ { id: 1, name: 'abc' }, { id: 2, name: 'efg' } ], total: 2 }
{
  items: [
    { id: 1, amount: 20.1, userId: 1 },
    { id: 2, amount: 321.2, userId: 2 }
  ],
  total: 2
}

 */

/**
 * 泛型 不是 any
 * any是不管,不检查
 *
 * 泛型是根据传入的那个类型来检查类型
 */

/**
 * 泛型函数
 */

const name = identity<string>('yangzi')

// 普通函数
// function getValue(value: string): string {
//   return value
// }

// 写成泛型函数
// 这里表示先占一个类型的位置,等调用时在看传入的类型是什么.
function getValue<T>(value: T): T {
  return value
}

const a = getValue('hello')
const b = getValue(123)
const c = getValue(true)

// 后端的一个例子
type UserApiResult =
  | {
      success: true
      data: User
    }
  | {
      success: false
      error: string
    }

type OrderApiResult =
  | {
      success: true
      data: Order
    }
  | {
      success: false
      error: string
    }

// 以上改成泛型
type ApiResult<T> =
  | {
      success: true
      data: T
    }
  | {
      success: false
      error: string
    }

/**
 * 泛型+promise
 */
async function getUser(id: number): Promise<User> {
  return { id: 1, name: 'yangzi' }
}
