// path.dirname() 可以拿到当前文件所在的目录

import path from 'node:path'

const dirname = path.dirname(import.meta.filename)
console.log(dirname)
console.log(import.meta.dirname)
