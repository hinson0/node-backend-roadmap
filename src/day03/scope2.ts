/**
 * 作用域：全局 函数 块 变量遮蔽
 */

// 什么是`作用域`？
// 一个变量在那些地方可以被访问！！！！！！！！！！！

// 1 全局作用域
const name = 'yangzi'

function hello() {
  console.log(name)
}

hello() // 这个name就是全局作用域

console.log(name)

const a = 1
const b = 2
console.log(a + b)

// 局部作用域
function test() {
  const age = 18

  console.log(age)
}

test()

// ReferenceError: age is not defined
// console.log(age) // age属于局部作用域 这里访问不了

// 块级作用域
if (1) {
  const city = 'beijing'
  console.log(city)
}

// city属于if的快，其他地方访问不了
// 下面这个代码会报错 ReferenceError: city is not defined
// console.log(city)

{
  const city = 'wuhan'
  let province = 'hubei'
}

// 上面{}构成了一个块，因此外面都访问不了。这个和python不同。
// python没有块作用域的概念
// RefernceError: city is not difined
// console.log(city)
// 下面也一样
// ReferenceError: province is not defined
// console.log(province)

// 变量遮蔽 variable shadowing
/**
 * 内层作用域声明了一个和外层作用域同名的变量。内层代码优先就近原则
 */

const name2 = 'global'

function test2() {
  const name2 = 'local'
  // 这里不会访问到外层的name2 因为就近有一个同名的name2=local
  // 因此这里返回name2=local
  console.log(name2)
}

test2()
console.log(name2)
