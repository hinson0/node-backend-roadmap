import { readFile, writeFile } from 'node:fs/promises'

// TODO 1
// 创建 Buffer，内容为：
// hello buffer
//
// 打印：
// Buffer 本身
// byte 长度
// UTF-8 字符串
// hex
// base64
const buf13 = Buffer.from('hello buffer')
console.log(buf13) // <Buffer 68 65 6c 6c 6f 20 62 75 66 66 65 72>
console.log(buf13.length) // 12
console.log(buf13.toString('utf-8')) // hello buffer
console.log(buf13.toString('hex')) // 68656c6c6f20627566666572
console.log(buf13.toString('base64')) // aGVsbG8gYnVmZmVy

// TODO 2
// 创建字符串：
// 中国Node.js
//
// 分别打印：
// string.length
// Buffer.byteLength()
// 观察两者区别

const str = '中国Node.js'
console.log(str.length) // 9
console.log(Buffer.byteLength(str)) // 3+3+7=13

// TODO 3
// 将字符串：
// hello node
//
// 转成 base64
// 再从 base64 恢复原字符串
const buf40 = Buffer.from('hello node')
const toBase64 = buf40.toString('base64')
console.log(toBase64) // aGVsbG8gbm9kZQ==

// TODO 4
// 读取 src/day13/test.txt
//
// 不传 encoding
// 判断结果是不是 Buffer
// 打印文件 byte 数量
// 再转成 UTF-8 字符串
const data = await readFile('src/day13/test.txt')
const isBuffer = Buffer.isBuffer(data)
console.log('is buffer???', isBuffer) // true
console.log(data.length) // 22
console.log(data.toString('utf-8'))

// TODO 5
// 使用 Buffer 复制 test.txt
// 生成：
// src/day13/test-copy.txt
const data60 = await readFile('src/day13/test.txt')
await writeFile('src/day13/test-copy61.txt', data60)
console.log('复制好了')

// TODO 6
// 创建：
// Buffer.from('ABCDE')
//
// 使用 subarray 取得：
// BCD
//
// 打印结果

const buf73 = Buffer.from('ABCDE')
const sub = buf73.subarray(1, 4)
console.log(sub.toString())

// 1. Buffer 是什么？
// Node.js 用来处理二进制 byte 数据的对象。

// 2. Buffer 可以简单理解成什么？
// 字节数组。 byte array

// 3. 一个 byte 范围是多少？
// 0 ~ 255 2^8

// 4. Buffer.from('hello') 做了什么？
// 把字符串按照指定编码转换成 byte。
// 这第 2 个参数表示: 如何编码字符串

// 这里第 2 个参数显示 base64 .告诉 buffer 我这是一个 base64 的表示的字符串
const str89 = Buffer.from('hello', 'base64')
console.log(str89) // <Buffer 85 e9 65>
console.log(str89.toString('base64')) // hell

// 这样的才是真 base64
const truthBase64 = 'aGVsbG8='
const str94 = Buffer.from(truthBase64, 'base64')
console.log(str94.toString()) // hello

// 5. buffer.toString('utf8') 做了什么？
// 将 byte 按照 utf-8 解码成字符串

// 6. readFile(path) 返回什么？
// buffer

// 7. readFile(path, 'utf8') 返回什么？
// string

// 8. string.length 和 buffer.length 一定一样吗？
// 不一定。

// string.length 看字符串长度；
// buffer.length 看 byte 数量。

// 9. 图片可以放进 Buffer 吗？
// 可以。

// 而且这才是 Buffer 非常典型的用途。

// 10. Buffer 和明天 Stream 有什么关系？

// 先建立：

// Buffer = 一块数据

// Stream = 一块一块地处理数据

// Buffer.from()    创建
// Buffer.alloc()   申请
// Buffer.concat()  合并

// buf.length       byte 数量
// buf.toString()   解码
// buf.subarray()   取一段

// hex / base64 / utf8
