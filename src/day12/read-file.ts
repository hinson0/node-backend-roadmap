import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'

// 获取文件名字
const filename = process.argv[2]

// 文件不存在异常
if (!filename) {
  console.error('文件不存在')
  process.exit(1)
}

// 文件的路径
const filepath = path.resolve(import.meta.dirname, filename)

// try 然后读取文件的路径
try {
  const info = await stat(filepath)

  if (!info.isFile()) {
    console.error('目标不是文件')
    process.exit(1)
  }

  const content = await readFile(filepath, 'utf-8')
  console.log('文件名', path.basename(filename))
  console.log('拓展名', path.extname(filename))
  console.log('大小', info.size)
  console.log('--------')
  console.log(content)
} catch (error) {
  if (error instanceof Error) {
    console.error(`读取文件失败: ${error.message}`)
  }
  process.exit(1)
}
