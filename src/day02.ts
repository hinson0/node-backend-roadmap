const user = {
  id: 1,
  name: "yangzi",
  age: 39,
};

// 居然可以这样解构。。。有意思了。。。
const { name, age } = user;

console.log(name, age);

// 解构数组
const nums = [1, 2, 3];
const [a, b] = nums;
console.log(a, b);

// 展开运算符
const user1 = {
  id: 1,
  name: "yangzi1",
};

const newUser = {
  ...user,
  age: 28,
};

console.log(newUser);

const newUser2 = {
  ...newUser,
  age: 39,
};
console.log(newUser2);

//
const a1 = [1, 2];
const b1 = [3, 4];
const c1 = [...a1, ...b1];
console.log(c1);

// const c2 = [a1, ...b1, ...a]; // TypeError: a is not iterable
// console.log(c2);

// 可选链?
const user3 = {
  profile: {
    nickname: "yangzi",
  },
};

if (user3 && user3.profile) {
  console.log(user3.profile.nickname);
}

console.log(user3?.profile?.nickname);
console.log(user3?.profile?.avatar); // undefined

// 空置合并运算符??
// const name4 = undefined;
// const name4 = null;
const name4 = false;
const result = name4 ?? "呵呵";
console.log(result);

// vs ||
const count = 0;
console.log(count || 10); // 10
console.log(count ?? 10); // 0 这个理解成： 如果不存在 则使用后面的10.否则使用自己。

// 常见场景
// const page = query.page ?? 10;
// const pageSize = query.pageSize ?? 10;

// === 判断是不是同一个对象

const arr1 = [1, 2, 3];
const arr2 = arr1;
const arr3 = [...arr2];

console.log(arr1 === arr2); // true
console.log(arr2 === arr3); // false
