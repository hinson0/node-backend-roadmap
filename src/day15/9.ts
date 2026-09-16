class User2225 {
  name: string

  constructor(name: string) {
    this.name = name
  }

  introduce(): string {
    return `我是 ${this.name}`
  }
}

class Admin extends User2225 {
  constructor(
    name: string,
    public permission: string,
  ) {
    super(name)
  }

  override introduce(): string {
    return `${super.introduce()}, 权限是${this.permission}`
  }
}

const admin2226 = new Admin('小明', '管理员')
console.log(admin2226.name)
console.log(admin2226.introduce())
