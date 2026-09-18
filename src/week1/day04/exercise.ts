function login(username: string): Promise<{ userId: number }> {
  // 500ms 后
  // username === 'yangzi'
  // resolve({ userId: 1 })
  //
  // 否则 reject

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'yangzi') {
        resolve({ userId: 999 })
      } else {
        reject(new Error(`username ${username} not existed`))
      }
    }, 2000)
  })
}

function getProfile(userId: number): Promise<{ name: string; age: number }> {
  // 500ms 后返回
  // { name: 'yangzi', age: 18 }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ name: 'yangzi', age: 39 })
      } else {
        reject(new Error(`user id ${userId} not existed`))
      }
    }, 3000)
  })
}

const username = 'yangzi'

login(username)
  .then((user) => {
    console.log(`用户名 ${username} 返回的 user id ${user.userId}`)

    return getProfile(user.userId)
  })
  .then((profile) => {
    console.log(`name is ${profile.name}, age is ${profile.age}`)
  })
  .catch((error) => {
    console.error(error)
  })
