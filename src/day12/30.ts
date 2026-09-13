// NODEJS.ERRORException
// 这是个什么鬼东西?

import { readFile } from 'node:fs/promises'

try {
  await readFile('./error.txt', 'utf-8')
} catch (error) {
  if (error instanceof Error) {
    const err = error as NodeJS.ErrnoException

    console.log(err.code) // ENOENT 错误
  }
}
