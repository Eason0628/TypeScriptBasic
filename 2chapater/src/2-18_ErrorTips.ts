let object = { username: "wangwu", age: 23 }
const username = "username"
// let username = "username"
// 这里如果let username = "username",object[username ]会报错，let 和 const的区别是let 可以重新赋值，const 不可以重新赋值(常量)
let u = object[username ]


// let obj:object = { username: "wangwu", age: 23 }
// const username = "username"
// let u = obj[username] //如果用object会报错，因为object是一个空对象，obj[username]默认会找object中的username属性，而其没有username属性

export {}
