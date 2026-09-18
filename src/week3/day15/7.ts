// 7 listener里面参加异步任务

import { EventEmitter } from 'node:events'

const emitter3 = new EventEmitter()

emitter3.on('hello', () => {
  setImmediate(() => {
    console.log('b')
  })
})

console.log('a')

emitter3.emit('hello')

console.log('c')

// a c b
