console.log('a')

queueMicrotask(() => {
  console.log('b')
})

console.log('c')

// a c b

// queueMicrotask(fn)
// 表示: 这个fn不要现在执行,放到microtask中,等同步代码结束了之后,作为microtask在执行.
