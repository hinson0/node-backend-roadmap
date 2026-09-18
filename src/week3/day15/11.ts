// error 事件

import EventEmitter from 'node:events'

const emitter = new EventEmitter()

// emitter.on('error', (error) => {
//   console.log(error.message)
// })

// emitter.emit('error', new Error('hehehehe')) // hehehehe
// 在on 了error之后，就会直接被error事件捕获，然后可以处理这个error

// 但如果没有error这个事件，直接emit这个error这个事件的话，那就会出现直接炸出来,然后程序挂

emitter.emit('error', 'heee') // 直接丢了一个未handle的错误出来;
