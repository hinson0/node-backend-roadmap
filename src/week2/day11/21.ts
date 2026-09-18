const start = performance.now() // 当前node进程启动后,已经过去了多少ms.单位是ms.

setTimeout(() => {
  // setTimeout(fn, 1000)
  // 表示1s后,event loop有机会才能执行fn
  // 换言之,如果event loop本身本卡住(js主线程被卡住,cpu密集计算)
  // 因此需要等js主线程卡完了然后才能执行fn
  console.log(performance.now() - start)
}, 1000)

const blockStart = performance.now()

while (performance.now() - blockStart < 3000) {}
// PS C:\Users\hinso\repos\node-backend-roadmap> node .\src\day11\21.ts
// 3000.3457

// > performance.now()
// 17717.6966

// 表示 17s + 717.6966ms
