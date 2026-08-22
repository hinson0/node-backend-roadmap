function outer() {
  const name = 'yangzi'

  function inner() {
    console.log(name)
  }

  inner()
}

outer()

// eg2
function outer2() {
  const name = 'yangzi'

  return function inner() {
    console.log(name)
  }
}

// 在这里创建了fn之后 理论上outer2已经执行结束了
// 但在下面fn() 调用时还是可以得到yangzi
// 说明：函数创建的时候，把它能访问的外部变量记住了。
const fn = outer2()
fn()

// eg3
function createCounter() {
  let count = 0

  return function () {
    count++
    return count
  }
}

const counter = createCounter()

console.log(counter())
console.log(counter())
console.log(counter())

// eg4: 闭包保存配置
function createLogger(prefix: string) {
  return function (message: string) {
    console.log(`[${prefix}] - ${message}`)
  }
}

const userLogger = createLogger('USER')
const orderLogger = createLogger('ORDER')

userLogger('用户登陆')
orderLogger('创建订单')
