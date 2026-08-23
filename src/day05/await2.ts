// promise reject 怎么处理

function login(username: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'yangzi') {
        resolve({ userId: 1 })
      } else {
        reject(new Error(`username ${username} not existed`))
      }
    }, 2000)
  })
}

async function main() {
  try {
    const user = login('yangzi')
    console.log(user)
  } catch (error) {
    console.error(error)
  }
}

main()
