type UserStatus = 'active' | 'disabled'

type User = {
  id: number
  name: string
  status: UserStatus
  nickname?: string | null
}

type Order = {
  id: number
  userId: User['id'] // indexed access type 索引访问类型
  amount: number
}

// TODO 1：定义泛型分页类型 PageResult<T>
// 要求：
// items
// total
// page
// pageSize

type PageResult<T> = {
  items: T[]
  total: number
  page: number
  pageSize: number
}

// TODO 2：定义泛型 API 结果 ApiResult<T>
// 成功：
// {
//   success: true
//   data: T
// }
//
// 失败：
// {
//   success: false
//   error: string
// }

type ApiResult<T> =
  | {
      success: true
      data: T
    }
  | {
      success: false
      error: string
    }

// TODO 3
// getUsers 返回：
// Promise<PageResult<User>>

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

// TODO 4
// getOrders 返回：
// Promise<PageResult<Order>>

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

// TODO 5
// getUserPage 返回：
// Promise<ApiResult<PageResult<User>>>

async function getUserPage(): Promise<ApiResult<PageResult<User>>> {
  return {
    success: true,
    data: {
      items: [
        {
          id: 1,
          name: 'yangzhibing',
          nickname: 'yangzi',
          status: 'active',
        },
        {
          id: 2,
          name: 'chenguihong',
          nickname: 'cgh',
          status: 'active',
        },
      ],
      total: 2,
      page: 1,
      pageSize: 20,
    },
  }
}

const userPage = await getUserPage(1)
console.log(userPage)

console.dir(userPage, { depth: null })
/**
 * node .\src\day08\18.ts
PS C:\Users\hinso\repos\node-backend-roadmap> node .\src\day08\18.ts
{
  success: true,
  data: { items: [ [Object], [Object] ], total: 2, page: 1, pageSize: 20 }
}


使用dir()可以得到里面的值
{
  success: true,
  data: {
    items: [
      {
        id: 1,
        name: 'yangzhibing',
        nickname: 'yangzi',
        status: 'active'
      },
      { id: 1, name: 'chenguihong', nickname: 'cgh', status: 'active' }
    ],
    total: 2,
    page: 1,
    pageSize: 20
  }
}

 */
