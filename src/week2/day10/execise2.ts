type UserStatus = 'active' | 'disabled'

type User = {
  id: number
  name: string
  email: string
  password: string
  status: UserStatus
  nickname?: string | null
  createdAt: Date
}

type Order = {
  id: number
  userId: User['id']
  amount: number
  status: 'pending' | 'paid' | 'cancelled'
}

// TODO 1
// UserListItem
//
// 只保留：
// id
// name
// status

type UserListItem = Pick<User, 'id' | 'name' | 'status'>

// TODO 2
// UserResponse
//
// User 除了 password 都保留
type UserResponse = Omit<User, 'password'>

// TODO 3
// CreateUserInput
//
// 只允许：
// name
// email
// password
type CreateUserInput = Pick<User, 'name' | 'email' | 'password'>

// TODO 4
// UpdateUserInput
//
// 只能修改：
// name
// nickname
//
// 两个字段都可以不传

type UpdateUserInput = Partial<Pick<User, 'name' | 'nickname'>>

// TODO 5
// OrderMap
//
// key: number
// value: Order

type OrderMap = Record<number, Order>

// TODO 6
// 每种 UserStatus 对应一个中文字符串
//
// active -> 正常
// disabled -> 禁用

const userStatusLabels: Record<UserStatus, string> = {
  // ...
  active: '正常',
  disabled: '禁用',
}

// TODO 7
// 每一种订单状态对应一个中文字符串
//
// pending -> 待支付
// paid -> 已支付
// cancelled -> 已取消

const orderStatusLabels: Record<Order['status'], string> = {
  // ...
  pending: '待支付',
  paid: '已支付',
  cancelled: '已取消',
}
