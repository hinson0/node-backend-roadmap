const user = {
  id: 1,
  name: 'yangzi',
  active: true,
}

// 1. user.id 是什么类型？ number

// 2. user.name = 123 会不会报错？ 会

// 3. user.age = 18 会不会报错？ 会

// 4. 如果把 active 删除，会不会报错？ 会

console.log(typeof user.id)

user.name = 123 // 不能将类型“number”分配给类型“string”。
user.age = 18 // 类型“{ id: number; name: string; active: boolean; }”上不存在属性“age”。
delete user.active // "delete" 运算符的操作数必须是可选的。
