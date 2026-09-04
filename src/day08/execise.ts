// userstatus

// type user

// type PageResult<T>

// async function getUsers:

type UserStatus = 'active' | 'disabled'

type User = {
  id: number
  name: string
  status: UserStatus
}

type PageResult<T> = {
  items: T[]
  total: number
  page: number
  pageSize: number
}

async function getUsers(): Promise<PageResult<User>> {
  return {
    items: [
      { id: 1, name: 'yzb', status: 'active' },
      { id: 2, name: 'cgh', status: 'disabled' },
    ],
    total: 2,
    page: 1,
    pageSize: 20,
  }
}

const users = await getUsers()
console.log(users)
/**
 * node .\src\day08\execise.ts
PS C:\Users\hinso\repos\node-backend-roadmap> node .\src\day08\execise.ts
{
  items: [
    { id: 1, name: 'yzb', status: 'active' },
    { id: 2, name: 'cgh', status: 'disabled' }
  ],
  total: 2,
  page: 1,
  pageSize: 20
}

 */

// 15 来一个order
// type Order
// async function getOrders

type Order = {
  id: number
  userId: User['id']
  amount: number
}

async function getOrders(userId: User['id']): Promise<PageResult<Order>> {
  return {
    items: [
      { id: 1, userId: userId, amount: 11 },
      { id: 2, userId: userId, amount: 12 },
    ],
    total: 2,
    page: 1,
    pageSize: 20,
  }
}

const orders = await getOrders(1)
console.log(orders)
/**
 * {
  items: [
    { id: 1, userId: 1, amount: 11 },
    { id: 2, userId: 1, amount: 12 }
  ],
  total: 2,
  page: 1,
  pageSize: 20
}
 */
