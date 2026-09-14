import { createReadStream } from 'node:fs'

let total = 0
const stream = createReadStream('src/day14/1.md', { highWaterMark: 10 })
console.log(Buffer.isBuffer(stream)) // false
console.log(stream)

for await (const chunk of stream) {
  // console.log(chunk.length)
  total += chunk.length
}
console.log(total) // 23

// 16 readFile() vs createReadStream()
// readFile()返回的是buffer
// createReadStream() 返回的是stream

// 17 Stream 和 Buffer 的关系
// stream 数据怎么持续传输
// buffer 数据本身是什么

// 18 stream不是文件,也不是数据;把数据传输进行了抽象

// 19 stream 与 buffer的心智地图
//              大文件
//                │
//                ▼
//         createReadStream
//                │
//                ▼
//           Readable
//                │
//     ┌──────────┼──────────┐
//     ▼          ▼          ▼
//   chunk      chunk      chunk
//  Buffer     Buffer     Buffer
//     │          │          │
//     └──────────┼──────────┘
//                ▼
//         Writable Stream
//                │
//                ▼
//              文件
