import { EventEmitter } from 'node:events'

const emitter = new EventEmitter()

console.log('A')

emitter.on('test', () => {
  console.log('B')

  Promise.resolve().then(() => {
    console.log('C')
  })
})

emitter.on('test', () => {
  console.log('D')
})

emitter.emit('test')

console.log('E')

// A b d e c
