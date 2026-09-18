import { Writable } from 'node:stream'

// 模拟一个“消费很慢”的 Writable
const writer = new Writable({
  // 高水位线只有 16 字节
  highWaterMark: 16,

  write(chunk, encoding, callback) {
    console.log(`  正在消费 ${chunk.length} bytes...`)

    // 故意 1 秒才消费完
    setTimeout(() => {
      console.log(`  ✅ 消费完成`)
      callback()
    }, 1000)
  },
})

let index = 0

function produce() {
  let ok = true

  while (ok && index < 10) {
    index++

    // 每次生产 8 字节
    const chunk = Buffer.alloc(8)

    ok = writer.write(chunk)

    console.log(
      `生产第 ${index} 块：write=${ok}，buffer=${writer.writableLength}`,
    )
  }

  if (!ok) {
    console.log('🚫 write() === false，暂停生产')
  }

  if (index === 10) {
    writer.end()
  }
}

writer.on('drain', () => {
  console.log('💧 drain：可以继续生产了')
  produce()
})

writer.on('finish', () => {
  console.log('全部完成')
})

produce()
