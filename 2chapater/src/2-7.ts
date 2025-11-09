let data: {}

let data2: object = { age: 23 }

// 联合类型
let str: string | number = 3
console.log("str:", str)

//  交叉类型
type Obj1 = { username: string }
type Obj2 = { age: number }
let obj1: Obj1 = { username: "abc" }
let obj2: Obj2 = { age: 23 }

let obj3: Obj1 & Obj2 = { username: "wangwu", age: 40 }

//let str2:string & number=3
// 字面量数据类型：
//type num=1|2|3
//let n:num=4  -- 报错

// type A=number|string
// let a:A="Abc"
// type num=number;
// let n:num=3;

// 字面量数据类型pre Example：
// type increaseFlag = 0 | 1
// function isStartUp(increase: increaseFlag) {
//   if (increase) {
//     console.log("open")
//   } else {
//     console.log("close")
//   }
// }
// isStartUp(3) -- 报错

export {}