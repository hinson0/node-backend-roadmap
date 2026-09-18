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

// 2. C 会不会继续执行到第 3 秒？
// 会. 因此.all不阻断promisei执行.

// eg2:

const result = await Promise.all([
  Promise.resolve(10),
  Promise.resolve('hello'),
  Promise.resolve(true),
])

// console.log(result)
// 10, hello, true

// eg3:
// 获取用户信息：1 秒
// 获取用户订单：2 秒
// 获取用户优惠券：3 秒

async function gerUser() {
  await sleep(1000)
  return 'user'
}

async function getOrders() {
  await sleep(2000)
  throw new Error('boom...')
  // return ['order1', 'order2']
}

async function getCoupons() {
  await sleep(3000)
  return ['coupon1', 'coupon2']
}

async function main2() {
  try {
    // 这里拿不到result的结果
    // 因为.all()只要有一个失败了 整个.all就返回reject.只会出发errorn分支
    const result = await Promise.all([gerUser(), getOrders(), getCoupons()])
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

// main2()

async function main3() {
  const result = await Promise.allSettled([
    task('A', 1000),
    task('B', 2000, false),
    task('C', 3000),
  ])

  for (const item of result) {
    if (item.status === 'fulfilled') {
      console.log('done...')
    } else {
      console.error(item)
    }
  }
}

main3()
