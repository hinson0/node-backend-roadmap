// NodeJS.ErrnoException

import { readFile } from 'node:fs/promises'

try {
  await readFile('./xxxx.txt', 'utf-8')
} catch (error) {
  if (error instanceof Error) {
    const err = error as NodeJS.ErrnoException

    console.log(err.code)
    console.log(err.message)
    console.log(err.errno)
    console.log(err.path)
    console.log(err.stack)
  }
}
