/**
 * JavaScript 管“值怎么运行”，TypeScript 管“这个值应该是什么类型”。
 */

// 三个基础类型
const name: string = 'yangzi'
const age: number = 18
let active: boolean = true // ts不区分int/float/double

// 不能将类型“number”分配给类型“boolean”。
// active = 11

/**
 * 2 很多时候ts可以不用写type
 * 因为它可以自己推断出来
 */

const age2 = 39

console.log(age2 + 2)
