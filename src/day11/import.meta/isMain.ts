import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

console.log(process.argv)

const isMain =
  process.argv[1] !== undefined &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)

// meta.url
// file:///xxxxx/node-backend-roadmap/src/day11/import.meta/isMain.ts
console.log(import.meta.url)

// c:/xxxxx/node-backend-roadmap/src/day11/import.meta
console.log(import.meta.dirname)
// c:/xxxxx/node-backend-roadmap/src/day11/import.meta/isMain.ts
console.log(fileURLToPath(import.meta.url))
// 完全等价于下面的东西。
// c:/xxxxx/node-backend-roadmap/src/day11/import.meta/isMain.ts
console.log(import.meta.filename)
