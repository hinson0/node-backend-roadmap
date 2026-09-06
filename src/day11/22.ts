console.log('1')

setTimeout(() => {
  console.log('2')
}, 0)

Promise.resolve().then(() => {
  console.log('3')
})

queueMicrotask(() => {
  console.log('4')
})

console.log('5')

// 1 5 3 4 2
// node .\src\day11\22.ts
// PS C:\Users\hinso\repos\node-backend-roadmap> node .\src\day11\22.ts
// 1
// 5
// 3
// 4
// 2
// 成就感满满
