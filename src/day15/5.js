"use strict";
class User2124 {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class User2127 {
    id;
    name;
    constructor(id, name, nickname) {
        this.id = id;
        this.name = name;
        console.log(nickname);
        console.log(this.name);
        console.log(this.id);
        // console.log(this.nickname) nickname是普通属性,因此不可以这样访问.
        // 除非在前面加个参数属性.public/private/protected/readonly
    }
}
const user2137 = new User2127(1, 'yangzhibing', 'yangzi');
user2137.name = '2222';
