type User = {
  name: string
  age: number
}

const raw: unknown = {
  name: 'yzb',
  age: '十八',
}

const user = raw as User

// age本身是一个number 但在raw的age是一个string
// as 告诉ts 你别检查我的类型 .你就当是User类型就可以了
