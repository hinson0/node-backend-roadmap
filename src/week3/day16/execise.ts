import { z } from 'zod'

// TODO 1：定义 CreateTaskSchema
//
// title：字符串，去掉首尾空白后，长度 1～50
// priority：只能是 low / normal / high，默认 normal
// estimated_minutes：正整数，可选
//
// 提示：
// .max(50)   最大长度
// .positive() 大于 0

const CreateTaskSchema = z.object({
  title: z.string().trim().min(1).max(50),
  priority: z.enum(['low', 'normal', 'high']).default('normal'),
  estimated_minutes: z.int().positive().optional(),
})

// TODO 2：从 CreateTaskSchema 推导 CreateTask 类型
type CreateTask = z.infer<typeof CreateTaskSchema>

// TODO 3：实现 createTask
//
// 使用 safeParse 检查 input
//
// 失败：
//   遍历 result.error.issues
//   输出字段路径和错误消息
//   然后 return
//
// 成功：
//   输出 result.data
//
// 提示：
// issue.path.join('.')  字段路径
// issue.message         错误消息

function createTask(input: unknown) {
  const result = CreateTaskSchema.safeParse(input)

  if (result.success) {
    console.log(result.data)
    return
  }

  for (const issue of result.error.issues) {
    console.log(issue.path.join('.'))
    console.log(issue.message)
  }
}

// TODO 4：逐个运行，观察结果

createTask({
  title: '  学习 Zod  ', // 学习 Zod
})
// 应通过：title 为 '学习 Zod'，priority 为 'normal'

createTask({
  title: '写接口',
  priority: 'high',
  estimated_minutes: 30,
})
// 应通过

createTask({
  title: '   ',
})
// 应失败：title 为空

createTask({
  title: '写接口',
  priority: 'urgent',
})
// 应失败：priority 不在允许范围

createTask({
  title: '写接口',
  estimated_minutes: '30',
})
// 应失败：字符串不是数字

createTask({
  title: '写接口',
  estimated_minutes: 1.5,
})
// 应失败：不是整数

createTask({
  title: '写接口',
  estimated_minutes: 0,
})
// 应失败：不是正数
