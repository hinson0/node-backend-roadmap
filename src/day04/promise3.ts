const p1 = new Promise<string>((resolve, reject) => {
  resolve('hehe')
})

console.log(p1)

function getUser(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true

      if (success) {
        resolve('11111111')
      } else {
        reject(new Error('not exists'))
      }
    }, 5000)
  })
}

getUser()
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.log(error.message)
  })
