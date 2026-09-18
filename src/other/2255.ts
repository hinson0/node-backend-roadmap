function myTag(strings, ...values) {
  console.log(strings) // hello yzb, age 18
  console.log(values) // [yzb, 18]

  console.log(JSON.stringify(strings[0])) // "hello "
  console.log(JSON.stringify(strings[1])) // ", age "
}

const name = 'yzb'
const age = 18
myTag`hello ${name}, age ${age}`
/**
 * myTag 叫: tag函数
 *
 * myTag`xxxx` 叫: 标签模板字符串
 */
