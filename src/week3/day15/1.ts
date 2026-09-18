// EventEmmiter
// event 事件
// emmiter 发射器

// on() 注册事件
// emit() 触发事件

// 用户注册成功
//     ↓
// emit('userCreated')
//     ↓
// ┌──────────────┬──────────────┬──────────────┐
// 发送欢迎邮件     写日志           发优惠券
// listener 1     listener 2     listener 3

// 2 基本的eventemiiter
import { EventEmitter } from 'node:events'

const emmitter = new EventEmitter()

// on('事件名字', listener)
emmitter.on('hello', () => {
  console.log('hello event')
})

// emit('事件名字')
emmitter.emit('hello')

// 3 emit可以携带数据
const emitter1 = new EventEmitter()
emitter1.on('userCreated', (id, name) => {
  // 1 yzb
  console.log(id)
  console.log(name)
})

emitter1.emit('userCreated', 1, 'yzb')

// 实际项目中传入对象
type User = {
  id: number
  name: string
}

emitter1.on('userCreated1', (user: User) => {
  console.log(user.id)
  console.log(user.name)
})

emitter1.emit('userCreated1', {
  id: 1,
  name: 'yzb',
})

// 4 一个事件可以有多个listener
emitter1.on('yzb', () => {
  console.log('发送欢迎邮件')
})

emitter1.on('yzb', () => {
  console.log('写入审计日志')
})

emitter1.on('yzb', () => {
  console.log('赠送新人优惠券')
})

emitter1.emit('yzb')

// 5 event emitter 是同步的
const emitter2 = new EventEmitter()

console.log('a')

emitter2.on('hello', () => {
  console.log('b')
})

emitter2.emit('hello') // 这步可以理解为: listener()

console.log('c')

// 6 和event loop联动
const emitter3 = new EventEmitter()

emitter3.on('hello', () => {
  console.log('b')
})

console.log('a')

emitter3.emit('hello') // listener()

Promise.resolve().then(() => {
  console.log('c')
})

console.log('d')

// a b d c
