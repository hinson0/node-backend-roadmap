/**
 * 1. T 是类型变量，不是值。 明白

2. T = string。？？？啥意思，给这个T属于string类型？

3.
{
  value: number 这个value是number
}

4. User[]  这个表示user这个类型的数组

5. Promise<PageResult<User>>  
这个表示首先是一个 Promise，里面的类型是 PageResult。而在 PageResult 里面，又用 User 作为它的类型

6. PageResult<User>

嗯，这个表示 page result里面用user作为它的类型

7. 都是在给泛型传具体类型。
   Promise<User> 表示 Promise 成功后的值是 User；
   PageResult<User> 表示分页 items 是 User[]。

8. any 会丢掉类型检查；
   泛型可以复用结构，同时保留具体类型信息。
 */

/**
 * // 1.
const result = getUsers()
// result 是什么类型？ promise<PageResult<User>>

// 2.
const result = await getUsers()
// result 是什么类型？ PageResult<User>

// 3.
const result = await getUserPage(1)

if (result.success) {
  // result.data 是什么类型？PageResult<User>>
  // result.data.items 是什么类型？ User[]
}

// 4.
type PageResult<T> = {
  items: T[]
}

// PageResult<Order> 里面的 T 到底是什么？Order类型
 */
