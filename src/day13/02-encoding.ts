// encoding
// 字符串和 buffer 转换的规则

import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const buf1 = Buffer.from('ABC', 'utf-8')
console.log(buf1) // <Buffer 41 42 43>
console.log(buf1.toString('utf-8')) // ABC
console.log(buf1.toString('ascii')) // ABC
console.log(buf1.toString('base64')) // QUJD
console.log(buf1.toString('hex')) // 414243

// 6 中文 utf-8 是 3 个 byte

console.log(Buffer.from('A')) // <Buffer 41>
console.log(Buffer.from('中')) // <Buffer e4 b8 ad>

console.log(Buffer.from('A').length) // 1
console.log(Buffer.from('中').length) // 3

// 字符串长度 ≠ 字节长度
const text = '中国'
console.log(text.length) // 2
console.log(Buffer.byteLength(text)) // 6

// 7 buffer.alloc()
// 直接申请一块内存
const buf2 = Buffer.alloc(4)
console.log(buf2) // <Buffer 00 00 00 00> 申请了 4 个字节,而且初始化都是 0x00

// 给 buf2 赋值
buf2[0] = 65
buf2[1] = 66
buf2[2] = 67
console.log(buf2) // <Buffer 41 42 43 00>
console.log(buf2.toString()) // ABC

// 3 个创建 buffer 的核心 api: .from() .alloc() .concat()

// .from() 已有数据 -> buffer
// .alloc() 申请指定大小
// .concat() 合并 buffer

const a = Buffer.from('yzb ')
const b = Buffer.from('cgh')
const result = Buffer.concat([a, b])
console.log(result.toString()) // yzb cgh

// 9 buffer 和文件的关系

const data = await readFile('tsconfig.json')
console.log(data)
// <Buffer 7b 0a 20 20 22 63 6f 6d 70 69 6c 65 72 4f 70
// 74 69 6f 6e 73 22 3a 20 7b 0a 20 20 20 20 22 74 79 70 65 73 22 3a 20
// 5b22 6e 6f 64 65 22 5d 2c 0a 20 20 ... 41 more bytes>

console.log(Buffer.isBuffer(data)) // true
console.log(data) // xxxx
console.log(data.toString())
// {
//   "compilerOptions": {
//     "types": ["node"],
//     "noUncheckedIndexedAccess": true
//   }
// }

// 10 不传入 encoding 值,则是 buffer
// 传入 encoding 值则是 string
const data69 = await readFile('tsconfig.json')
console.log(Buffer.isBuffer(data69)) // true

const data72 = await readFile('tsconfig.json', 'utf-8')
console.log(Buffer.isBuffer(data72)) // false

// 11 为什么图片不能随便 toString()
const data76 = await readFile(resolve(import.meta.dirname, '馄饨.jpg'))
console.log(data76)
//<Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 00
//  ff db 00 43 00 09 06 06 08 06 05 09 08 07 08 0a 09 09 0a0d 16 0e 0d 0c
// 0c 0d 1a 13 14 10 ... 102689 more bytes>

// 图片本质上不是文本,因此如果这里使用 utf-8 解释成文本,对 human 来说就是乱码
console.log(data76.toString())
// (��7+
// f)
//   ��D�t��1Z.�F�m�Oz��K$u�SV�9��*0=�64��9�QJ..

// 因此.txt/json/js 等文本文件 可以 toString() 可以 encoding=utf-8
// 但 jpg/png/mp4/zip/pdf 等文件本质非 文本存储的资源 需要直接处理 buffer

// 12 TODO:
