const list = ['a', 'b', 'c']

const result = list.reduce(
  (obj, x) => {
    obj[x] = true
    return obj
  },
  {} as Record<string, boolean>,
)

// { a: true, b: true, c: true }
