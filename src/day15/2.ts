// ts再次基础上加了类型世界
class User4 {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  introduce() {
    return `我叫${this.name},今年${this.age}`
  }

  birthday() {
    this.age++
  }
}

const yz = new User4('yangzi', '39')
