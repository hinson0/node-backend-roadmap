// 复制文件

import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'

async function copyFile(source: string, target: string) {
  const reader = createReadStream(source)
  const writer = createWriteStream(target)
  await pipeline(reader, writer)
}

const source = 'src/day14/big.txt'
const target = 'src/day14/big-copy.txt'
await copyFile(source, target)
console.log('done')
