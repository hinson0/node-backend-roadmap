// JavaScript：#，TypeScript 也支持
class User {
  #name // #不是符号,就是名字的一部分.也就是说内部访问也是按照#name,而不是按照this.name来访问的

  constructor(name) {
    this.#name = name
  }

  greet() {
    console.log(this.#name)
  }
}

const user = new User('张三')
user.#name // 语法错误：类外不能访问

// user.greet()
