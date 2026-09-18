/**
 * l类型推断
 *
 * type inference
 * 如果是普通的const命名不需要无脑去加类型,会自动被推断出意思的.
 *
 *
 * 但通常函数函数参数则需要手动去显示制定
 */

function add(a: number, b: number) {
  return a + b
}

// 多个参数
function task(name: string, ms: number, sucess: boolean) {}

task('yangzi', 123, true)

// 以下不行
// task(1, '1', 1)
// task(3, true, '2')

// /**
//  * 函数返回值
//  */

// function foo(a: number, b: number): number {
//   return '123' // 这是不可以的
// }

/**
 * sleep函数的实现
 * 里面返回的是一个 promise
 * 然后在promise里面执行settimeout 在settimeout里面执行resolve
 */

function sleep2(ms: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

// void是指不返回有意义的值

/**
 * 普通函数 vs async
 */

function getName(): string {
  return 'yangzi'
}

async function getName2(): Promise<string> {
  return 'yangzi'
}

async function getFoo(): Promise<number> {
  return 123
}

async function getBar(): Promise<void> {
  throw new Error('hehehe')
}

/**
 * 数组类型
 */
const ids: number[] = [1, 2, 3]
const strings: string[] = ['A', 'B', 'C']

/**
 * 对象类型
 */
const user = {
  id: 1,
  name: 'yangzi',
  active: true,
}

/**
 * 对象数组
 */

function getOrders(): {
  id: number
  userId: number
  name: string
}[] {
  return [
    { id: 101, userId: 1, name: 'yangzi' },
    { id: 102, userId: 2, name: 'cgh' },
  ]
}

/**
 * null undefined
 * null表示没有值,明确说我的值就是空的
 * undefined表示 还没定义值.
 */

let name: string | null = null
name = '123'
// name = 111 // 不能将类型“number”分配给类型“string”。

function foo(x?: string) {
  console.log(x)
}

foo() // undefined
foo('yangzi') // yangzi

/**
 * updateUser
 */

type updateUser = {
  nickname?: string | null
}

const a: updateUser = {}
// const b: updateUser = { nickname: 123 }
/**
 * 不能将类型“number”分配给类型“string”。
2.ts(116, 3): 所需类型来自属性 "nickname"，在此处的 "updateUser" 类型上声明该属性
 */
const c: updateUser = { nickname: 'yangzi' }
const d: updateUser = { nickname: null }
// const e: updateUser = { nickname: undefined }
/**
 * 类型 “{ nickname: undefined; }” 不能分配给“exactOptionalPropertyTypes: true”的类型 “updateUser”。请考虑将 “undefined” 添加到目标属性的类型。
  属性“nickname”的类型不兼容。
    不能将类型“undefined”分配给类型“string | null”。
 */

/**
 * any 就是ts不管你了 尽量不要用
 */

let data: any = 123
data = 'hehe'
data = true
data = null
data.foo.bar()
