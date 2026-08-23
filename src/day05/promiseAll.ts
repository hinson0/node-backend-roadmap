function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

async function task(name: string, ms: number, success = true) {
  await sleep(ms)

  console.log(`${name} finished`)

  if (success) {
    return name
  } else {
    throw new Error(`${name} failed`)
  }
}

async function main() {
  try {
    const result = await Promise.all([task('a', 1000), task('b', 5000, false), task('c', 10000)])
    console.log(result)
  } catch (error) {
    console.log(error.message)
  }
}

main()

async function main2() {
  try {
    const result = await Promise.allSettled([
      task('a', 1000),
      task('b', 2000, false),
      task('c', 3000),
    ])
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

// main2()
