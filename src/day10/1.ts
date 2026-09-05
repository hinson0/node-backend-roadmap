// Utility Types
// utilify表示: 辅助工具.
// utility tppes: 表示基于已有类型生成新的类型,避免重复写字段
// pick/ omit/ patial/record

type UserStatus = 'active' | 'disabled'

type User = {
  id: number
  name: string
  status: UserStatus
  nickname?: string
  email: string
  password: string
}

type UserProfile = Pick<User, 'id' | 'name' | 'email'>
// pick的核心作用是:ssot,single source of truth.
// 意思是: 比如email从string改成了EamilAddress 那结果就是:UserProfile会跟着一起走.
// pick的价值就在这里. 概括为:新类型和原类型保持一致.

// 2 omit: 从已有的类型中剔除几个
type SafeUser = Omit<User, 'password'>
// 等价
/**
 * type SafeUser = {
 id: number
  name: string
  status: UserStatus
  nickname?: string
  email: string
  password: string
}

 */

const yzb: SafeUser = {
  id: 1,
  name: 'yangzhibing',
  status: 'active',
  nickname: 'yangzi',
  email: 'yangzi@qq.com',
}

console.log(yzb)

// 3 partial
// 在patch更新的时候 这个时候使用
// 比如只更新name 只更新status 只更新nickname
type UpdateUser = Partial<Omit<User, 'id'>>

function updateUser(data: UpdateUser) {
  console.log(data)
}
updateUser({
  email: 'sssss@qq.com',
})

// 4 record: 描述key -> value
type UserMap = Record<string, User>

const users: UserMap = {
  yangzi: {
    id: 1,
    email: 'yangzi@qq.com',
    name: 'yangzhibing',
    password: '123456',
    status: 'active',
  },
  tom: {
    id: 2,
    email: 'tom@qq.com',
    name: 'tom yang',
    password: '123456',
    status: 'disabled',
  },
}

type UserMap2 = {
  [key: string]: User // 这个key用了string类型.这个语法叫:索引签名index signature
}

// record重要的用法:
type UserStatus2 = 'active' | 'disabled'
const statusLabels: Record<UserStatus2, '正常' | '禁用'> = {
  active: '正常',
  disabled: '禁用',
}

// 后端的例子
// prettier-ignore
type ErrorCode = 
  | 'USER_NOT_FOUND' 
  | 'INVALID_PASSWORD'
  | 'INTERNAL_ERROR'
  | "USER_DISABLED"

const errorMessages: Record<ErrorCode, string> = {
  USER_NOT_FOUND: '用户不存在',
  INVALID_PASSWORD: '密码错误',
  INTERNAL_ERROR: '服务器错误',
  USER_DISABLED: '用户被禁用',
}

function getErrorMessage(code: ErrorCode) {
  return errorMessages[code]
}
