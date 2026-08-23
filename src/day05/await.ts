function getUser(): Promise<{ id: number; name: string }> {
  return Promise.resolve({
    id: 1,
    name: 'yangzi',
  })
}

getUser().then((user) => {
  console.log(user)
})

// await之后
const user = await getUser()
console.log(user)

/**
 * await 等的是什么 等是promise的resolve的结果
 */
function sleep(second: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done...')
    }, second)
  })
}

async function main() {
  console.log('start')

  const result = await sleep(2000)
  console.log(result)

  console.log('end')
}

main()
