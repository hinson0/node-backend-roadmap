function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

async function task(name: string, ms: number, success = true) {
  await sleep(ms)

  console.log(`${name} finished`)

  if (success) {
    return name
  } else {
    throw new Error(`${name} failed`)
  }
}

async function main() {
  try {
    const result = await Promise.all([
      task('a', 1000),
      task('b', 2000, false),
      task('c', 3000),
    ])
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

// 1. 大概第几秒进入 catch？
// 2s

// 2. C 会不会继续执行到第 5 秒？
// 会. 因此.all不阻断promisei执行.

// eg2:

const result = await Promise.all([
  Promise.resolve(10),
  Promise.resolve('hello'),
  Promise.resolve(true),
])

console.log(result)
// 10, hello, true

// eg3:
// 获取用户信息：1 秒
// 获取用户订单：2 秒
// 获取用户优惠券：3 秒

async function gerUser() {
  await sleep(1000)
}

async function getOrders() {
  await sleep(2000)
}

async function getCoupons() {
  await sleep(3000)
}

async function main2() {
  const result = await Promise.all([gerUser(), getOrders(), getCoupons()])
  console.log(result)
}

main2()
