type TaskStatus = 'pending' | 'done'

class Task {
  // TODO 1
  // id：number，只读
  // title：string，公开
  // status：TaskStatus，私有，初始值为 pending
  // readonly id: number
  // public title: string
  private status: TaskStatus = 'pending'

  // TODO 2
  // constructor 接收 id 和 title
  constructor(
    readonly id: number,
    public title: string,
  ) {}

  // TODO 3
  // complete()：将状态改为 done
  complete = () => {
    this.status = 'done'
  }

  // TODO 4
  // getStatus()：返回当前状态
  getStatus = () => {
    return this.status
  }
  // TODO 5
  // getter summary
  // 返回类似：[pending] 学习 class
  get summary() {
    return `[${this.status}] 学习 ${this.title}`
  }
}

const task2247 = new Task(1, '学习js class')
console.log(task2247.summary)

const x = task2247.summary
console.log(x)

task2247.complete()

console.log(task2247.getStatus())
console.log(task2247.summary)

// task2247.id = 222 // 不可以,因为这个是readonly
// task2247.status = 'done' // 这个是私有属性,不可以访问
