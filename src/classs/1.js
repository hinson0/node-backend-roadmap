// js的类
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  introduce() {
    return `我叫${this.name},今年${this.age}`
  }

  birthday() {
    this.age++
  }

  // 这里不需要写这个function,这个就是我今天遇到的坑
  // function ddd() {
  //
  // }
}

const user = new User('杨子', 39)
console.log(user.name)
console.log(user.introduce())

user.birthday()
console.log(user.age)

// 这点很有意思了
class Counter {
  count = 0 // 这个是实例的属性,不是类属性;这点和python不同

  increment() {
    this.count++
  }
}

const a = new Counter()
const b = new Counter()

a.increment()
a.increment()

b.increment()

console.log(a.count)
console.log(b.count)

// 数组也一样,也会得到自己的实例,而不是类共享的
class TodoList {
  items = []
}

const a2 = new TodoList()
const b2 = new TodoList()

a2.items.push('学习 class')

// console.log(a2.items) [ '学习 class' ]
console.log(b2.items) // []
