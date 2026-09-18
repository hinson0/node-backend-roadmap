import EventEmitter from 'node:events'

type User = {
  id: number
  name: string
}

const emitter = new EventEmitter()

// TODO 1
//
// 监听 userCreated
//
// 收到 User 后输出：
//
// send email to: yzb

emitter.on('userCreated', (user) => {
  console.log(`send emial to: ${user.name}`)
})

// TODO 2
//
// 再注册一个 userCreated listener
//
// 输出：
//
// write audit log: user 1 created

emitter.on('userCreated', (user: User) => {
  console.log(`write audit log: user ${user.id} created`)
})

// TODO 3
//
// emit userCreated
//
// 数据：
// {
//   id: 1,
//   name: 'yzb'
// }

emitter.emit('userCreated', { id: 1, name: 'yzb' })

// TODO 4
//
// 注册 systemReady
//
// 要求这个 listener 最多执行一次
//
// 输出：
//
// system ready
//
// 然后连续 emit systemReady 三次
//
// 最终应该只输出一次
emitter.once('systemReady', () => {
  console.log('system ready')
})

emitter.emit('systemReady')
emitter.emit('systemReady')
emitter.emit('systemReady')

// TODO 5
//
// 创建下面这个 listener：
//
// function handleMessage(message: string) {
//   console.log(`message: ${message}`)
// }
//
// 注册 message
//
// emit:
// hello
//
// 然后移除这个 listener
//
// 再 emit:
// world
//
// 最终 world 不应该被输出

function handleMessage(message: string) {
  console.log(`message: ${message}`)
}

emitter.on('message', handleMessage)

emitter.emit('message', 'hello')

emitter.off('message', handleMessage)

emitter.emit('message', 'world')

// TODO 6
//
// 监听 error
//
// 输出：
//
// error: database failed
//
// 然后：
//
// emitter.emit('error', new Error('database failed'))

emitter.on('error', (error: Error) => {
  console.log(`error: ${error.message}`)
})

emitter.emit('error', new Error('database failed'))
