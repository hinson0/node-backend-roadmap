import { createReadStream } from 'node:fs'

let total = 0
const stream = createReadStream('src/day14/1.md', { highWaterMark: 10 })

for await (const chunk of stream) {
  console.log(chunk.length)
  total += chunk.length
}
console.log(total) // 23
