import EventEmitter from 'node:events'

type Order = {
  id: number
  userId: number
  amount: number
}

// 1. 输出订单日志

// order 1001 created

// 2. 模拟发送通知

// notify user 10

// 3. 输出订单金额

// amount: 99

const emitter = new EventEmitter()

emitter.on('orderCreated', function sendEmail(order: Order) {
  console.log(`notify user ${order.userId}`)
})

emitter.on('orderCreated', function printOrderAmout(order: Order) {
  console.log(`amout: ${order.amount}`)
})

emitter.on('orderCreated', function printOrderLog(order: Order) {
  console.log(`order ${order.id} created`)
})

function orderCreated() {
  const order: Order = {
    id: 1001,
    userId: 10,
    amount: 99,
  }

  console.log('订单创建好了')

  emitter.emit('orderCreated', order)
}

orderCreated()

//
// 1. EventEmitter 是干什么的？

// 事件通知;事件机制

// 2. on() 是干什么的？

// 注册 listener。

// 3. emit() 是干什么的？

// 触发事件并把参数传给 listener。

// 4. 一个事件能不能有多个 listener？

// 可以。

// 5. emit 默认是异步的吗？

// 不是，listener 默认同步执行。

// 6. on 和 once 区别？

// on 每次触发；
// once 最多一次。

// 7. off 为什么经常需要保存函数变量？

// 因为必须传入原来的函数引用。

// 8. error 事件有什么特殊？

// 如果 emit('error') 时没人监听，错误会被抛出，可能导致进程退出。

// 9. Day14 的 reader.on('data') 本质是什么？

// Stream 在使用 Node 的事件机制监听 data 事件。

// 10. EventEmitter 最大的设计价值是什么？

// 发布者只负责发布事件，让多个监听者独立响应，从而降低耦合。
