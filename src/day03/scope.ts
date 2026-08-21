// 作用域：变量在哪里可以访问
const name = 'global'

function test() {
  const age = 18

  if (1) {
    const city = 'beijing'
    console.log(name, age, city)
  }

  // ReferenceError: city is not difined
  // console.log(city)
}

test()
