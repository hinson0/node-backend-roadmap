type Product = {
  id: number
  name: string
  price: number
  stock: number
  description: string
}

// TODO 1
// 创建 ProductListItem
//
// 只包含：
// id
// name
// price

type ProductListItem = Pick<Product, 'id' | 'name' | 'price'>[]

const productList: ProductListItem = [
  { id: 1, name: 'iphone x', price: 6999 },
  { id: 2, name: 'xiaomi 17 ultra', price: 5999 },
]
console.log(productList)

// TODO 2
// 创建 ProductWithoutDescription
//
// Product 除了 description 全部保留
type ProductWithoutDescription = Omit<Product, 'description'>

// TODO 3
// 创建 UpdateProduct
//
// id 不允许修改
// 其他字段全部可选
type UpdateProduct = Partial<Omit<Product, 'id'>>

// TODO 4
// 创建 ProductMap
//
// key 是 string
// value 是 Product
type ProductMap = Record<string, Product>

// 一个例子
type User = {
  id: number
  name: string
  email: string
  password: string
  status: 'active' | 'disabled'
  createdAt: Date
}

type CreateUserInput = Pick<User, 'name' | 'email' | 'password'>
type UserResponse = Omit<User, 'password'>
type UpdateUserInput = Omit<User, 'id' | 'createAt'>
type UpdateUserInput2 = Partial<Pick<User, 'name' | 'email'>> // 写成下面的话就很危险
type UpdateUserInput3 = Partial<User> // 意味着可以修改任意字段了.

//
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

type ErrorMessageMap = Record<ApiError['type'], string>
/**
 * type ErrorMessageMap = {
    validation: string;
    not_found: string;
    internal: string;
  }

  这里就拿到了ApiError['type']的字符串字面量类型了.
 */
const errorTitles: ErrorMessageMap = {
  validation: '参数错误',
  not_found: '资源不存在',
  internal: '服务错误',
}
