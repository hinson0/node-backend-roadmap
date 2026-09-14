import { createReadStream, createWriteStream } from 'node:fs'

// const writer = createWriteStream('src/day14/big.txt')

// for (let i = 0; i < 100_000; i++) {
//   writer.write(`line${i}: hello node stream\n`)
// }

// writer.end()

// 21 一块一块读取

const stream = createReadStream('src/day14/big.txt', { highWaterMark: 1024 })
// on('data')
// 打印此数+长度

let count = 0
stream.on('data', (chunk) => {
  count += chunk.length
  console.log(chunk.length)
})

// on('end')
// 打印总数
stream.on('end', () => {
  console.log(`总数为${count}`)
})
