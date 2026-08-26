// exp1

const result = await Promise.allSettled([
  Promise.resolve(100),
  Promise.reject(new Error('boom...')),
  Promise.resolve('hello'),
])

// result 大概是什么结构？
// 这个 await 会不会 throw？ 不会

/**

resultd的样子

[
{status: fulfilled, value: 100},
{status: reject, reason: boom...+ 错误堆栈}
{status: fulfilled, value: hello}
]

 */

// exp2:
const result2 = await Promise.all([
  Promise.resolve(100),
  Promise.reject(new Error('boom')),
  Promise.resolve('hello'),
])

// 这个 await 会不会 throw？ 会
// result 能不能正常拿到？ 拿不到

// exp3:
// A.

// 查询用户
// 查询用户订单
// 查询用户权限

// 三个都是当前接口必须返回的数据。 all

// B.

// 发送邮件
// 发送短信
// 发送 Push

// 某一个失败，不影响其他两个。 allSettled

// 全部都要成功 promise.all
// 我要h知道每个结果 不论成功h或者失败...
