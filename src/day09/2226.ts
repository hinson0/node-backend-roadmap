let data: unknown = 'hello'

data = 123
data = true
data = {
  id: 1,
}

// 我这个时候不能使用它是什么类型,就不确定是否有.length这个属性
// console.log(data.length)

if (typeof data === 'string') {
  // 这里叫: type narrowing
  console.log(data.length)
}

//2 unkwonw和any的区别

let value: any = 'hello'
// value.foo.bar() // ts完全不管

// 但
let value2: unknown = 'hello'
// value2.foo // 这里ts会报错.即ts还是会检查.只是我需要手动去收窄类型.

if (typeof value2 === 'object' && value2 !== null && 'foo' in value2) {
  console.log(value2.foo) // 这样就可以访问foo了.做了type narrowing.
}

// 4 第一种类型收窄
function printValue(value: unknown) {
  if (typeof value === 'string') {
    console.log(value.toLocaleUpperCase())
  }

  if (typeof value === 'number') {
    console.log(value.toFixed(2))
  }
}

printValue(22)

//5 typeof 可以判断的地方
// typeof value === 'string'
// typeof value === 'number'
// typeof value === 'boolean'
// typeof value === 'function'
// typeof value === 'undefined'
// typeof value === 'object'

function handle(value: unknown) {
  if (typeof value === 'number') {
    console.log(value + 100)
  }
}

handle('yangzi') // void
handle(100) // 200

// javascript的老坑
// typeof null 的结果object
console.log(typeof null) // object

// 我总算明白了为什么 !== 'object' && !== null了

// 7 in收窄
type User = {
  id: number
  name: string
}

function handle2(value: unknown) {
  if (typeof value === 'object' && value !== null && 'name' in value) {
    console.log(value.name)
  }
}

// 8 联合类型也可以收窄
type UserStatus = 'active' | 'disabled'

function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log(id.toLocaleUpperCase())
  }

  if (typeof id === 'number') {
    console.log(id.toFixed(3))
  }
}

printId(100)

// 9 ApiResult本质就是type narrowing
type ApiResult<T> =
  | {
      success: true
      data: T
    }
  | {
      success: false
      error: string
    }

function handleResult(result: ApiResult<User>) {
  // discriminate union 判别联合类型
  if (result.success) {
    console.log(result.data)
  } else {
    console.error(result.error)
  }
}

// 10 后端常见的type
type ApiError =
  | {
      type: 'validation' // string literal type.
      message: string
      field: string
    }
  | {
      type: 'not_found'
      message: string
      resource: string
    }
  | {
      type: 'internal'
      message: string
    }

function handleError(error: ApiError) {
  if (error.type === 'validation') {
    console.log(error.field, error.message)
  }

  if (error.type === 'not_found') {
    console.log(error.resource)
  }

  if (error.type === 'internal') {
    console.log(error.message)
  }
}

// 11 never
// 这个地方永远不会正常产生一个值
function fail(message: string): never {
  throw new Error(message)
}

// fail('foo')
/**
 * Error: foo
    at fail (file:///C:/Users/hinso/repos/node-backend-roadmap/src/day09/2226.ts:147:9)
    at file:///C:/Users/hinso/repos/node-backend-roadmap/src/day09/2226.ts:150:1
    at ModuleJob.run (node:internal/modules/esm/module_job:561:25)
    at async node:internal/modules/esm/loader:647:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)

Node.js v24.20.0
 */

// 12 void vs never
function log() {
  console.log('hello')
}

// log函数还是会走到函数结束.只是没有值返回

// fail函数则不同,他是整个流程走不下去了.直接炸了.

// 一个更显示的never
function infiniteLoop(): never {
  while (true) {
    console.log('running')
  }
}

// infiniteLoop()

// 15 assertNever
function assertNever(status: never): never {
  throw new Error(`Unexpected status: ${value}`)
}

type OrderStatus = 'pending' | 'paid' | 'cancelled'

function handleStatus(status: OrderStatus): string {
  switch (status) {
    case 'pending':
      return '等待支付'
    case 'paid':
      return '已支付'
    case 'cancelled':
      return '取消'
    default:
      return assertNever(status)
  }
}

// handleStatus('xxxc') // Error: Unexpected status: hello

// 16 API错误类型
// tppe UserStatus
// type User

type UserStatus3 = 'active' | 'disabled'
type User3 = {
  id: number
  name: string
  status: UserStatus3
  nickname?: string
}

// ApiError
type ApiError3 =
  | {
      type: 'validation'
      field: string
      message: string
    }
  | {
      type: 'not found'
      resource: string
      message: string
    }
  | {
      type: 'internal'
      message: string
    }
  | {
      type: 'unauthorized'
      message: string
    }

// ApiResult<T> // success+data / success+ApiError

type ApiResult3<T> =
  | {
      success: true
      data: T
    }
  | {
      success: false
      error: ApiError3
    }

// function getUser
function getUser3(id: number): ApiResult3<User3> {
  if (id < 0) {
    return {
      success: false,
      error: {
        type: 'validation',
        field: 'id',
        message: 'id must be larger than 0',
      },
    }
  }

  if (id === 404) {
    return {
      success: false,
      error: {
        type: 'not found',
        resource: 'user',
        message: 'user not found',
      },
    }
  }

  return {
    success: true,
    data: {
      id: id,
      name: 'yangzhibing',
      nickname: 'yangzi',
      status: 'active',
    },
  }
}

function assertNever3(error: never): never {
  throw new Error(error)
}

function handleApiError3(error: ApiError3) {
  switch (error.type) {
    case 'internal':
      return `${error.message}`
    case 'validation':
      return `${error.field}: ${error.message}`
    case 'not found':
      return `${error.resource}: ${error.message}`
    default:
      // throw new Error(error.message)
      return assertNever3(error) // 如果用这样的方式,这样就相当于会报错.上面加了一个error.type类型之后
  }
}

const result = getUser3(1)
if (result.success) {
  console.log(result.data)
} else {
  console.log(handleApiError3(result.error))

  // const error = result.error
  // if (error.type === 'validation') {
  //   console.log(`${error.field}: ${error.message}`)
  // }
  // if (error.type === 'not found') {
  //   console.log(`${error.resource}: ${error.message}`)
  // }
  // if (error.type === 'internal') {
  //   console.log(`${error.message}`)
  // }
}

// 19 catch / unknown

try {
  throw new Error('database failed')
  // throw 123
  // throw 'boom'
  // throw { message: 'boom' }
} catch (error) {
  if (error instanceof Error) {
    // 类型收窄
    // console.log(error.message)
    console.log(error.stack)
  }
}
