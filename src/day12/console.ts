// console.log('hello')

// console.error('error')

// # a114514 @ yzb in ~/repos/node-backend-roadmap on git:main x [8:32:37]
// $ node src/day12/console.ts > src/day12/output.txt 2> src/day12/error.txt
// 也就是说 `1>` 是把log stdout到output.txt
// `2>`则不同,把stderr到error.txt上

process.stdin.on('data', (data) => {
  console.log(data.toString()) // 直接把外面error.txt的内容收进来
})
// node src/day12/console.ts < src/day12/error.txt
// error
