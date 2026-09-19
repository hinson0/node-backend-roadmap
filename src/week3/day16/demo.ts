import z from 'zod'

const NameSchema = z.string() // schema描述数据应满足的规则 string表示数据是字符串

console.log(NameSchema.parse('yzb')) // parse检查数据,通过返回解析结果.失败抛错
// console.log(NameSchema.parse(123)) // invalid input: expected string, received number

// 实际接口通常收到一个对象
// z.object() 相当于定义的schema是一个object;然后给这个object里面的key对应的schema
const UserSchema = z.object({
  name: z.string().trim().min(1),
  age: z.number().int().min(8),
})

const user = UserSchema.parse({
  name: '   yzb ',
  age: 39,
})
console.log(user) // {name: 'yzb', age: 39}

// 4 safeParse() 失败了不抛异常,不炸进程
const raw = {
  name: 111,
  age: '11',
}

const result = UserSchema.safeParse(raw)
if (result.success) {
  console.log('校验通过: ', result.data.name)
} else {
  console.log('校验失败, ', result.error.issues)
}
// 校验失败,  [
//   {
//     expected: 'string',
//     code: 'invalid_type',
//     path: [ 'name' ],
//     message: 'Invalid input: expected string, received number'
//   },
//   {
//     expected: 'number',
//     code: 'invalid_type',
//     path: [ 'age' ],
//     message: 'Invalid input: expected number, received string'
//   }
//

// 5 z.infer
type User = z.infer<typeof UserSchema>
// UserSchema负责在runtime检查
// 推导出来的类型,给ts用的.

// 6 可选值,默认值和限定值
const AccountSchema = z.object({
  nickname: z.string().optional(),
  role: z.enum(['admin', 'member']).default('member'),
})

console.log(AccountSchema.parse({}))

const xx = AccountSchema.safeParse({
  role: 'boos',
})
console.log(xx)
// { success: false, error: [Getter/Setter] }

console.log(xx.error)
// invalid option: expected one of admin , member

// coerce 强制转换
const ageSchema = z.coerce.number().int().min(8)
const result2 = ageSchema.parse('20')
console.log(result2)
