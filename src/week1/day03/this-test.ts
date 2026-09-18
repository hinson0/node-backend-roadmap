console.log('this =', this)
console.log('import.meta.url =', import.meta.url)

await Promise.resolve()
console.log('top-level await ok')
