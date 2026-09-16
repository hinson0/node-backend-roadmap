class Counter {
  private count = 0

  increment(): void {
    this.count++
  }

  getCount(): number {
    return this.count
  }
}

const counter = new Counter()

counter.increment()

console.log(counter.getCount()) // 15

// TypeScript 报错
console.log(counter.count)
counter.count = -999
console.log(counter.count)
