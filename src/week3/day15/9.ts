import { EventEmitter } from 'node:events'

const emitter = new EventEmitter()

function handleMessage(message: string) {
  console.log(message)
}

function greet(name: string) {
  console.log(`hello ${name}`)
}

emitter.on('handle', handleMessage)
emitter.on('greet', greet)

emitter.emit('handle', 'yiqunfeiwu') // yiqunfeiwu
emitter.emit('greet', 'yzb') // hello yzb

emitter.off('handle', handleMessage)
emitter.emit('handle') // 没有输出

/**
 * 这样的情况是删不掉的
 */
emitter.on('message', () => {
  console.log('hello')
})

emitter.emit('message') // hello

emitter.off('message', () => {
  console.log('hello')
})

emitter.emit('message') // hello

const fn1 = () => {}
const fn2 = () => {}
console.log(fn1 === fn2) // false

// 因此要off的。必须是同一个函数的引用
