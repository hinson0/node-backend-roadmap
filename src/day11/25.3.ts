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

Promise.resolve().then(() => {
  console.log('6')
})

// 1 6 2 3 4 5
// 执行顺序是
// 同步代码 -> nextTick -> microtask -> eventloop(timers->poll->check) -> callback
