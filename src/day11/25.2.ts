console.log('1')

setTimeout(() => {
  console.log('2')

  Promise.resolve().then(() => {
    console.log('3')

    Promise.resolve().then(() => {
      console.log('4')
    })
  })
}, 0)

setTimeout(() => {
  console.log('5')
}, 0)

// 这个例子的结果是: 1 2 3 4 5
