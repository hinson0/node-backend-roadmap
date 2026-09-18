// todo 1
/**
 * pn tsx src/day12/execise.ts hello
[
  '/Users/yangzhibing/.local/share/fnm/node-versions/v24.20.0/installation/bin/node',
  '/Users/yangzhibing/repos/node-backend-roadmap/src/day12/execise.ts',
  'hello'
]
undefined

这里很有意思的 虽然数过去 hello 的下标是 3
但实际结果是前两个 pn tsx 只是占用了 node 这一个下标.
 */

import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { cwd } from 'node:process'

console.log(process.argv)
console.log(process.argv[2])

// todo 2
// pnpm tsx src/day12/exercise.ts ./package.json
const filename = process.argv[2]
if (typeof filename !== 'string') {
  console.error('请提供文件路径')
  process.exit(1)
}

const absolutePath = path.resolve(filename)
console.log(absolutePath)

// todo 3
// pnpm tsx src/day12/exercise.ts package.json
const basename = path.basename(absolutePath)
const extname = path.extname(absolutePath)
console.log(basename)
console.log(extname)

// todo 4
console.log('----------------')
try {
  const content = await readFile(absolutePath, 'utf-8')
  const info = await stat(absolutePath)

  console.log('path:', absolutePath)
  console.log('name:', basename)
  console.log('ext:', extname)
  console.log('size:', info.size)
  console.log('----------------')
  console.log(content)
} catch (error) {
  if (error instanceof Error) {
    console.error('读取文件失败')
  }
  process.exit(1)
}
