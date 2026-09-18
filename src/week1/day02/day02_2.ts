const apiUser = {
  id: 1001,
  name: 'yangzi',
  profile: {
    nickname2: 'yz',
  },
  roles: ['user', 'admin'],
}

// 解构
const { id, name, profile, roles } = apiUser

// const result
// id, username: name, nickname: profile?.nickname, roles: [...roles], enabled: true

const result = {
  id,
  username: name,
  nickname: profile?.nickname ?? '未设置',
  roles: [...roles],
  enabled: true,
}

console.log(result)

// 更新

const result2 = {
  ...result,
  enabled: false,
  nickname: 'hehe',
}

console.log(result2)
// pn tsx src/day02_2.ts
// {
//   id: 1001,
//   username: 'yangzi',
//   nickname: '未设置',
//   roles: [ 'user', 'admin' ],
//   enabled: true
// }
// {
//   id: 1001,
//   username: 'yangzi',
//   nickname: 'hehe',
//   roles: [ 'user', 'admin' ],
//   enabled: false
// }
