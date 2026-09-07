// 16 fs是干什么的
// file system
// 读文件 写文件 删文件 创建目录 读取目录 查看文件信息
// readFile() 异步
// readFileSync() 同步

// import { log } from 'node:console'
// import { readFile, readFileSync } from 'node:fs'

// const content = readFileSync('./package.json', 'utf-8')

// log(content)

// 重要:
import { readFile } from 'node:fs/promises'
const content = await readFile('./.gitignore', 'utf-8')
console.log(content)

const content2 = await readFile('./.gitignore')
console.log(content2)
// <Buffer 6e 6f 64 65 5f 6d 6f 64 75 6c 65 73 0d 0a 2e 73 6d 61 72 74>

// 21 writeFile()
import { writeFile } from 'node:fs/promises'

// await writeFile('./src/day12/hello.txt', 'hello world', 'utf-8')
// await writeFile('./src/day12/hello2.txt', 'hello world')

// 22 appendFile()
import { appendFile } from 'node:fs/promises'

await appendFile('./src/day12/hello.txt', 'append:hello world\n', 'utf-8')

// 23 mkdir()
import { mkdir } from 'node:fs/promises'

await mkdir('./src/day12/data/foo/bar/fuz/buz', { recursive: true })

// 24 readdir()
import { readdir } from 'node:fs/promises'
const files = await readdir('./src/day12')
console.log(files) // [ 'data', 'fs.ts', 'hello.txt', 'hello2.txt', 'path.ts', 'process.ts' ]

// 25 stat()
import { stat } from 'node:fs/promises'
const status = await stat('./package.json')
console.log(status)
// Stats {
//   dev: 275540301,
//   mode: 33206,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: 4096,
//   ino: 562949953810263,
//   size: 696, // 文件大小
//   blocks: 8,
//   atimeMs: 1788680768390.4302,
//   mtimeMs: 1788680768390.4302,
//   ctimeMs: 1788680768390.4302,
//   birthtimeMs: 1788441402876.42
// }

// node .\src\day12\fs.ts
console.log(status.isFile()) // true
console.log(status.isDirectory()) // false

// 26 unlink()
// 删除文件
import { unlink } from 'node:fs/promises'
await unlink('./src/day12/hello2.txt')

// 27 今天先记住这几个
// readFile writeFile appendFile
// readdir mkdir
//  stat
// unlink

// 28 TODO:
