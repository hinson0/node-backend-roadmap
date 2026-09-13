// 7 path是干什么的
import path from 'node:path'

const file = path.join(process.cwd(), 'src', 'day12', 'test.txt')
// console.log(file)

// 9 path.join()

// 10 path.resolve()
const file2 = path.resolve('src/day12/test.txt')
console.log(file2)
// C:\Users\hinso\repos\node-backend-roadmap\src\day12\test.txt

// 11 绝对路径

// 12 path.basename()
const file3 = path.basename('/home/yzb/a.txt')
console.log(file3) // a.txt

console.log(path.basename(file2)) // test.txt

console.log(path.basename('a/b/c/d/e')) // e
// basename表示路径的最后一段名字
console.log(path.dirname('a/b/c/d/e/'))

// 13 path.dirname()
console.log(path.dirname('a/b/c/d/hehe.txt')) // a/b/c/d
console.log(path.dirname('c:\\a\\b\\c\\d\\aaa.txt')) // c:\a\b\c\d

// 14 path.extname()

console.log(path.extname('file.txt')) // .txt

// 15
// path.join()  拼路径
// path.resolve() 得到绝对路径 默认相对于process.cwd()
// path.basename() 拿到最后一段
// path.dirname() 目录名字 抛开
// path.extname() 获取拓展名字

// path.parse()
console.log(path.parse('a/b/c/d/test.txt'))
// {
//   root: '',
//   dir: 'a/b/c/d',
//   base: 'test.txt',
//   ext: '.txt',
//   name: 'test'
// }

path.parse('/home/yangzi/xxx.txt') // root : / ; dir: /home/yangzi ; base: xxx.txt; ext: .txt; name: xxx
path.parse('c:\\aaa\\bbb\\ccc.txt') // root: c:\ ; dir: c:\aaa\bbb; base: ccc.txt; ext: .txt; name: ccc
