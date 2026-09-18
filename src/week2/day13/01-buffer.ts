// 计算机底层只有字节byte 的概念,没有所谓的 string/number/图片/视频/zip 等等

//nodejs 用 buffer 来表示 byte.
// 可以理解成:buffer 就是byte 数组

const buf = Buffer.from('abc')
console.log(buf)
// <Buffer 61 62 63>
// 0x61 表示 16 进制.换算为十进制就是 6*16^1+1*16^0=96+1=97

const yzb = Buffer.from('yzb')
console.log(yzb)
// <Buffer 79 7a 62>
// y = 0x79 = 7*16+9=112+9=121
// z = 0x7a = 7*16+10 = 112+10=122
// b = 0x62 = 6*16^1+2*16^0=96+2=98

// 3 buffer 的本质像 unit8array
console.log(yzb[0]) // 121
console.log(yzb[1]) // 122
console.log(yzb[2]) // 98
console.log(yzb[3]) // undefined

// 这种写法没效果
yzb[3] = 99
console.log(yzb[3]) // 还是 undefined 因为 buffer 不会自己扩容

// 只能修改自己的原有的位置
yzb[2] = 100
console.log(yzb) // <Buffer 79 7a 64> 就不再是之前的 `<Buffer 79 7a 62>`
console.log(yzb.toString()) // 现在是 yzd
