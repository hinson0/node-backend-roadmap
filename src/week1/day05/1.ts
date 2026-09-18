async function foo() {
  return 123
}

const result = foo()
console.log(result) // Promise { 123 }

// exp2:

async function foo2() {
  return 123
}

async function main() {
  const result = await foo2()
  console.log(result) // 123
}

// exp3:
async function foo3() {
  throw new Error('boom')
}

async function main3() {
  try {
    const result = await foo3()
    console.log(result)
  } catch (error) {
    console.log('catch...boom')
  }
}

// main3() // catch...boom

// exp4:

function task(name: string, ms: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve(name)
    }, ms)
  })
}

async function main4() {
  const taskA = await task('a', 1000)
  console.log(taskA)

  const taskB = await task('b', 3000)
  console.log(taskB)
}

// main4() // 1s 出a 在过3s出b

async function main5() {
  const [taskA, taskB] = await Promise.all([task('a', 1000), task('b', 1000)])
  console.log(taskA)
  console.log(taskB)
}

// main5()

// 这样的写法也可以并发
async function main6() {
  const pA = task('a', 1000)
  const pB = task('b', 3000)

  const taskA = await pA
  const taskB = await pB
  console.log(taskA)
  console.log(taskB)

  // 关键不是 有没有写两个await 而是第二个异步什么时候启动.
}

main6()
