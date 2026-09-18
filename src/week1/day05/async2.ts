// async function sleep(second: number): Promise<void> {
//   await new Promise<void>((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, second * 1000)
//   })
// }

function sleep(second: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, second * 1000)
  })
}

// getUser
async function getUser(username: string) {
  await sleep(1)
  if (username === 'yangzi') {
    return { id: 1, username: 'yangzi', age: 39 }
  } else {
    throw new Error(`${username} not existed`)
  }
}

async function getOrders(userId: number) {
  await sleep(2)
  if (userId !== 1) {
    throw new Error(`orders not existed`)
  }

  return [
    { id: 1, product: 'xiaomi 13 ultra' },
    { id: 2, product: 'iphone x' },
  ]
}

async function main() {
  const user = await getUser('yangzi')

  const orders = await getOrders(user.id)

  console.log(user)
  console.log(orders)
}

main()
