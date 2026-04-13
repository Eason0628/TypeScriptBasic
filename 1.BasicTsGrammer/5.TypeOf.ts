// TypeOf 当某些类型不确定时，可以使用TypeOf来推导类型
//string number boolean undefined object function symbol bigint

let a: number = 1;
type myType = typeof a;
let b: myType = 456;


// ====================================================
let a = {name: "张三", age: 18}
type c = typeof a //{name:string,age:number}
let obj: typeof a = {name: "aa", age: 12}

// ====================================================
const user = {
  name: "张三",
  age: 18,
  hobby: ["打篮球"],
} as const; // 只读类型

// 从user对象推导类型
type UserType = typeof user;
let u: UserType = user;  

// ====================================================

//string number boolean undefined object function symbol bigint
type myType = {name:string, age:number, isMarried:boolean, run:()=>void}
let a = {
  name: "张三",
  age: 18,
  isMarraied: false,
  run: function() { console.log(123) }
}

//{name:string,age:number,isMarried:boolean,run:()=>void}
type c = typeof a

let b: c = {
  name: "aaa",
  age: 12,
  isMarraied: true,
  run: () => {}
}

