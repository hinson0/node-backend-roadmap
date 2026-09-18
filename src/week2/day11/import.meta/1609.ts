console.log(import.meta)

// [Object: null prototype] {
//   dirname: 'C:\\Users\\hinso\\repos\\node-backend-roadmap\\src\\day11\\import.meta',
//   filename: 'C:\\Users\\hinso\\repos\\node-backend-roadmap\\src\\day11\\import.meta\\1609.ts',
//   main: true,
//   resolve: [Function: resolve],
//   url: 'file:///C:/Users/hinso/repos/node-backend-roadmap/src/day11/import.meta/1609.ts'
// }

// cell 2
console.log(import.meta.dirname) // c:\users\hinso\repos\node-backend-roadmap\src\day11\import.meta
console.log(import.meta.filename) // c:\users\hinso\repos\node-backend-roadmap\src\day11\import.meta\1609.ts
console.log(import.meta.url) // file:///c:/usrs/hinso/repos/node-backend-roadmap/src/day11/import.meta/1609.ts
console.log(import.meta.resolve('./hehe.ts')) // file:///c:/users/hinso/repos/node-backend-roadmap/src/day11/import.meta/hehe.ts
console.log(import.meta.main) // true
