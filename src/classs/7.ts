class User2204 {
  #name = ''

  get name() {
    return this.#name
  }

  set name(value: string) {
    const trimmed = value.trim()
    if (!trimmed) {
      throw new Error('空的')
    }
    this.#name = trimmed
  }
}

const user2206 = new User2204()
user2206.name = '   xxxx '
console.log(user2206.name)

// static标识类的

class User2213 {
  static createdCount = 0

  constructor(public name: string) {
    User2213.createdCount++
  }

  static describe() {
    return '属于类,不属于实例'
  }
}

const user2215 = new User2213('小明')
const user2214 = new User2213('小红')

console.log(user2214.name)
console.log(user2215.name)
// console.log(user2214.describe()) // user2214.describe is not a function

console.log(User2213.createdCount)
console.log(User2213.describe())
