// 普通函数看`怎么调用` 箭头函数没有自己的this
const user = {
  name: 'yangzi',

  sayName() {
    console.log(this.name)
  },
}

const foo = user.sayName

// foo() // TypeError: cannot read propertiesof undefined(reading `name`)

const name = '呵呵呵呵呵呵'

const user2 = {
  name: 'yangzi',

  sayName: () => {
    // 箭头函数没有this
    // 这个this继承的是外部作用域。
    // 当前运行环境下 顶层this是{} 因此this.name是undefined
    console.log(this.name)
  },
}

// user2.sayName()

console.log(this) // undefined
console.log(this.xxxx) // cannot read properties of undefined(reading `xxxx`)

export {}
