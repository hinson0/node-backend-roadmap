import { readFile } from 'node:fs/promises'

const buffer = await readFile('src/day13/test.txt')
console.log(buffer) // <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 0a e4 bd a0 e5 a5 bd 20 4e 6f 64 65>
console.log(Buffer.isBuffer(buffer)) // true
console.log(buffer.length) // 22

const text = buffer.toString('utf-8')
console.log(text)
// hello node
// 你好 Node

// 第 2 种直接读取拿到文本
const text14 = await readFile('src/day13/test.txt', 'utf-8')
console.log(text14)
