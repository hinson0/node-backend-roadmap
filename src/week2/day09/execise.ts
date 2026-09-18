type UserStatus = 'active' | 'disabled'

type User = {
  id: number
  name: string
  status: UserStatus
  nickname?: string | null
}

type ApiError =
  | {
      type: 'validation'
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

type ApiResult<T> =
  | {
      success: true
      data: T
    }
  | {
      success: false
      error: ApiError
    }

// TODO 3
// 实现 getUser
//
// id <= 0
// => validation
//
// id === 404
// => not_found
//
// 其他
// => 返回 User

function getUser(id: number): ApiResult<User> {
  if (id <= 0) {
    return {
      success: false,
      error: {
        type: 'validation',
        message: 'id must be greater than 0',
        field: 'id',
      },
    }
  }

  if (id === 404) {
    return {
      success: false,
      error: {
        type: 'not_found',
        message: 'user not found',
        resource: 'user',
      },
    }
  }

  return {
    success: true,
    data: {
      id,
      name: 'yangzi',
      status: 'active',
      nickname: null,
    },
  }
}

// TODO 4
// 写 assertNever

function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${JSON.stringify(value)}`)
}

// TODO 5
// 根据 error.type
// 返回不同错误信息

function handleApiError(error: ApiError): string {
  switch (error.type) {
    case 'validation':
      return `${error.field}: ${error.message}`

    case 'not_found':
      return `${error.resource}: ${error.message}`

    case 'internal':
      return error.message

    default:
      return assertNever(error)
  }
}

const result = getUser(1)

if (result.success) {
  console.log(result.data)
} else {
  console.log(handleApiError(result.error))
}

// TODO 6
// unknown 类型收窄
function printUnknown2(value: unknown) {
  // typeof value === string
  if (typeof value === 'string') {
    console.log(value.toLocaleUpperCase())
    return
  }

  // tppeof value === number
  if (typeof value === 'number') {
    console.log(value.toFixed(2))
    return
  }
  // value instanceof Error
  if (value instanceof Error) {
    console.error(value.message)
    return
  }

  console.log('unknown value')
}

printUnknown2('hello')
printUnknown2(123)
printUnknown2(new Error('boom'))
printUnknown2({
  id: 1,
})

// typeof
// 适合：
// string
// number
// boolean
// undefined

// instanceof
// 适合：
// Error
// Date
// 自定义 class

// 22
/**
 * 1.
 *
 * const value: unknown = 'hello'
 *
 * 为什么不能直接 value.toUpperCase()？ 因为类型是unknown,如果需要toUpperCase()则需要使用 typeof string收窄
 */

/**
 * 2.
 *
 * if (typeof value === 'string') {
 *   // value 是什么类型？string
 * }
 */

/**
 * 3.
 *
 * type Result =
 *   | { success: true; data: User }
 *   | { success: false; error: string }
 *
 * if (result.success) {
 *   // result 是什么类型？  { success: true; data: User }
 * }
 */

/**
 * 4.
 *
 * function fail(): never {
 *   throw new Error('boom')
 * }
 *
 * 为什么这里是 never，而不是 void？
 * void表示不返回值,程序可以正常走下去
 * never函数永远不会正常返回.
 *
 */

/**
 * 5.
 *
 * catch (error) {
 * }
 *
 * 为什么不能直接假设 error 一定是 Error？
 * 因为js可以直接throw 123/ 'boom' / ...
 */

/**
 * 6.
 *
 * assertNever() 在 switch 里最大的作用是什么？
 * 增加了一个新的条件后,ts可以自动识别,并且在ide这个层面就提示报错.
 */
