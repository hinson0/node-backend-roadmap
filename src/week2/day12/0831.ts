const map = new Map([
  ['a', 10],
  ['b', 20],
])

for (const [key, value] of map) {
  console.log(key, value)
}

console.log(map.keys())

console.log(map.values())

console.log(map.entries())

const keys = [...map.keys()]
console.log(keys)

const values = [...map.values()]
console.log(values)

const l = [1, 2, 3]
for (const element of l) {
  console.log(element)
}

l.forEach((item, index) => {
  console.log(index, item)
})
