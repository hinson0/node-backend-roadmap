// 方法脱离实例后,this就没了

class User2234 {
  constructor(public name: string) {}

  introduce() {
    console.log(this.name)
  }
}

const user2235 = new User2234('yzb')
user2235.introduce() // yzb

const fn2236 = user2235.introduce

// fn2236() // cannot read properties of undefined(reading name)

const fn2237 = user2235.introduce.bind(user2235)
fn2237() // yzb

9
class User223 {
  constructor(public name: string) {}

  // 每个实例都会参加自己的函数
  introduce = () => {
    console.log(this.name)
  }
}

const user2240 = new User223('yzb')
const fn2240 = user2240.introduce
fn2240() // yzb
