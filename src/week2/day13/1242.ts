// 19
const buf34 = Buffer.from('ABC')

console.log(buf34) //
console.log(buf34.length) // 3

console.log(buf34[0])
console.log(buf34[1])
console.log(buf34[2])

console.log(buf34.toString()) // ABC

// Buffer 为什么显示 41 42 43？
// buf 保存的是字符串 ABC 的 二进制表示. A:41 以此类推

// buf[0] 为什么是 65？

// Buffer.length 表示什么？ABC 申请的内存字节数量.

const buf52 = Buffer.from('yzb')
console.log(buf52) // 十六进制 <Buffer 79 7a 62>
console.log(buf52[0]) // 十进制 121 而不是 79
console.log(buf52[0]?.toString(16)) // 十六进制 79

// 20
const text = '中国ABC'
const buf28 = Buffer.from(text)

console.log('字符串:', text)
console.log('string.length:', text.length) // 5
console.log('buffer.length:', buf28.length) // 3+3+1+1+1=9

console.log('hex:', buf28.toString('hex')) // 十六进制表示 e4b8ade59bbd414243
console.log('base64:', buf28.toString('base64')) // base64 的文本表示 5Lit5Zu9QUJD
console.log('utf8:', buf28.toString('utf8')) // 中国ABC
