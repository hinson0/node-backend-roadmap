import { createReadStream } from 'node:fs'

const reader = createReadStream('src/week2/day14/big.txt')

let i = 0
reader.on('data', (chunk) => {
  // console.log(chunk)
  i++
})

reader.on('end', () => {
  console.log('读取完成', i)
})

// ReadStream
//    │
//    ├── emit('data', chunk)
//    │        ↓
//    │   data listener
//    │
//    └── emit('end')
//             ↓
//         end listener

// {
//   userCreated: [
//     listener1,
//     listener2,
//     listener3
//   ],

//   userDeleted: [
//     listener4
//   ]
// }

// userCreated: 是 event name
// 可以在里面不停的on挂上listener的;比如listen1+listen2+listen3....

// 14 emit的返回值?

const result = reader.emit('heheh')
console.log(result) // false 因为这个reader 没有on过heheh这个event

//
import EventEmitter from 'node:events'

const emitter = new EventEmitter()

console.log(emitter.emit('abc')) // false 没有on过abc这个事件

// 15 this
emitter.on('foo', function () {
  console.log(this === emitter)
})

emitter.emit('foo') // true
