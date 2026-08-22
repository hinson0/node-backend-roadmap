const user = {
  name: 'yangzi',

  sayName() {
    console.log(this.name)
  },
}

user.sayName()

/**
 * 对象方法里的this
 * 重点看调用方式。即user.sayName() 则意味着是user，因此this代表user
 *
 * 可是把方法拿出来就会出问题
 */

const sayName = user.sayName

// cannot read properties of undefined (reading 'name')
// 因为 sayName() 前面没有`user.` 没有了这个this就不代表user了。
// 在esm中 this表示undefined
// sayName()

// 了解this最重要的一句话
// 普通函数的this很大程度取决与这个函数被谁调用。

// 箭头函数为什么特殊
// 箭头函数没有this,只会使用外部的this

const user31 = {
  name: 'yangzi',

  sayName() {
    const fn = () => {
      console.log(this.name)
    }
    fn()
  },
}

user31.sayName()

const foo = user31.sayName
// cannot read properties of undefined(reading 'name')
// foo()

// 上面等价

function foo2() {
  const fn = () => {
    // 箭头函数不存在this 因此this直接使用顶层的this
    // 在esm中 顶层的this为undifend
    // 因此在undefined.name中 就会提示这个报错了
    // cannot read properties of undefined (reading 'name')
    console.log(this.name)
  }
  fn()
}

// foo2()
