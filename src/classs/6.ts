class Rectangle {
  constructor(
    public width: number,
    public height: number,
  ) {}

  get area(): number {
    return this.width * this.height
  }
}

const rectangle = new Rectangle(10, 5)
console.log(rectangle.area)

rectangle.width = 100
console.log(rectangle.area)
// console.log(rectangle.area()) // 这个不可以
