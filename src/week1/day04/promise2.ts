function getUser(id: number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve(`user-${id}`)
      } else {
        reject(new Error('id 必须大于0'))
      }
    }, 500)
  })

  return promise
}

getUser(1)
  .then((user) => {
    // then是在promise执行成功后x执行
    // ii并且o最重要的一点是 then本身会返回一个promise
    // 也就是为什么可以不断的往后连接的原因.
    console.log(`成功 ${user}`)
  })
  .catch((error) => {
    console.log(`失败 ${error.message}`)
  })

// eg2
const p1 = Promise.resolve(10)

const p2 = p1.then((value) => {
  return value * 2
})

console.log(p1)
console.log(p2)

const p3 = p2.then((value) => {
  return value + 5
})

p3.then((value) => {
  console.log(value)
})
