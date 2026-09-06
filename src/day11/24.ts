async function foo() {
  console.log('2')

  await Promise.resolve()

  console.log('3')
}

console.log('1')

foo()

console.log('4')

// 1 2 4 3
