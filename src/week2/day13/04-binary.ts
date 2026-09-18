// 22 复制文件

import { readFile, writeFile } from 'node:fs/promises'

const data = await readFile('src/day13/test.txt')

await writeFile('src/day13/test-copy', data)

console.log('复制完成')

// 图片也是一样的
const image = await readFile('src/day13/馄饨.jpg')
await writeFile('src/day13/馄饨-copy.jpg', image)
console.log('图片复制完成')
