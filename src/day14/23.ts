// TODO 1
// 使用 createReadStream 读取 big.txt

import { createReadStream, createWriteStream, read, write } from 'node:fs'
import { pipeline } from 'node:stream/promises'

// highWaterMark 设置成 1024
const reader = createReadStream('src/day14/big.txt', { highWaterMark: 1024 })

// TODO 2
// 每收到一个 chunk
// 统计：
// chunk 数量
// 总字节数
let count = 0
let total = 0
reader.on('data', (chunk) => {
  count++
  total += chunk.length
})

// TODO 3
// 文件读取完成后输出：
//
// chunks: xxx
// bytes: xxx
reader.on('end', () => {
  console.log(`chunk count is ${count}`)
  console.log(`byte count is ${total}`)
})

// TODO 4
// 使用 pipeline
// 把 big.txt 复制为 big-copy.txt
const reader2 = createReadStream('src/day14/big.txt')
const writer = createWriteStream('src/day14/big-copy2.txt')
await pipeline(reader2, writer)

// TODO 5
// 再使用 for await...of
// 实现一次文件大小统计

let total2 = 0
const reader3 = createReadStream('src/day14/big.txt')
for await (const chunk of reader3) {
  total2 += chunk.length
}
console.log(total2)

/**
 * 1. Stream 是什么？ 数据传输的一种抽象;本质是叫数据传输.
 * stream是对`持续\分块传输数据`过程的一种抽象

2. Buffer 和 Stream 有什么区别？ buffer是数据本身(字节) stream是数据的传输

3. readFile 和 createReadStream 最大区别是什么？ 
readFile 是一次性拿到所有数据
后者是一块一块的拿,持续的拿.

4. chunk 是什么？ 
stream传过来的一块数据

5. createReadStream 默认拿到的 chunk 通常是什么类型？ buffer

6. highWaterMark 是干什么的？ 最高水位线,即每次我从stream内部缓冲区容量阈值

7. Readable 和 Writable 分别是什么？ 前者是指从stream都出来,后者可以把数据写入stream.

8. pipe() 是干什么的？ 讲reader 和 writer 等串在一起,多做了一些工作:核心是协调读写速度
 
9. Backpressure 是什么？ 背压;是指读的快,写的慢,产生的速度协调问题.

10. pipeline() 为什么比手动 data + write 更适合工程代码？ 
串联了stream+backpressure+错误传播+资源清理
 */
