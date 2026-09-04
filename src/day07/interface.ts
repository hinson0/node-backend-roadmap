interface User {
  id: number
  name: string
}

// 拓展字段类型
interface Admin extends User {
  permissions: string[]
}

const admin: Admin = {
  id: 1,
  name: 'yangzhibing',
  permissions: ['read', 'write'],
}

// tppe & 也可以

type User2 = {
  id: number
  name: string
}

type Admin2 = User2 & {
  permissions: string[]
}

// 题目
type BaseUer = {
  // id name
  id: number
  name: string
}

type LoginInfo = {
  // token expiresAt
  token: string
  expiresAt: number
}

type LoggedUser = BaseUer & LoginInfo

const yzb: LoggedUser = {
  id: 1,
  name: 'yangzhibing',
  token: 'abcdedfsfasdfafdadf',
  expiresAt: 123456,
}

// 1. | 和 & 的区别是什么？
//  | 是或者
// & 是一起有
// 2. LoggedInUser 为什么必须同时有
//    id、name、token、expiresAt？
// 因为它来自于 LoginInfo & BaseUser 同时拥有2边的类型
