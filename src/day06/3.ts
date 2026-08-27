const name = 'yangzi' // 这里的name是字面量类型
const age = 18
const active = true

let name2 = 'yangzi'

// name string
// age number
// active boolean

// add(1, 2) // no

// add('1', 2) // yes

// add(1, '2') // yes

// a 是什么类型？ promise<number>
// b 是什么类型？ number

async function foo(): Promise<number> {
  return 123
}

const a = foo()
const b = await foo()

// return ['yangzi', 123] 报错 因为123是数值

function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function task(
  name: string,
  ms: number,
  success: boolean,
): Promise<string> {
  await sleep(ms)

  if (success) {
    return name
  }

  throw new Error(`${name} failed`)
}
