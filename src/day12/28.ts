import { readFile } from 'node:fs/promises'

// await readFile('./xxx.txt', 'utf8')
// Error: ENOENT: no such file or directory, open './xxx.txt'
// ENOENY error no entry: 错误 没有这个入口
// 说人话: 找不到这个文件

try {
  const content = await readFile('./xxx.txt', 'utf8')

  console.log(content)
} catch (error) {
  console.error(error)
}
