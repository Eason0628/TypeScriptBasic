// 如果你需要创建⼀个新的接⼝，⽽这个新的接⼝中的部分内容我已经在已存在的接⼝中定义过了，那么可以直接继承，⽆需重复定义

interface Person {
  name: string;
  age: number;
  address: string;
}
interface Girl extends Person {
  height: number;
  hobby: string[];
}
interface Boy extends Person {
  salary: number;
  car: string;
}
let xf: Girl = {
  name: "⼩芳",
  age: 18,
  address: "北京",
  height: 170,
  hobby: ["逛街", "买买买"],
};

//=============================================================================================================
// ⼀个接⼝可以被多个接⼝继承，同样，⼀个接⼝也可以继承多个接⼝，多个接⼝⽤逗号隔开继承多个接⼝，必须同时实现继承每⼀个接⼝定义的属性
interface Person {
  name: string;
  age: number;
  address: string;
}
interface Pro {
  phone: string;
  coat: string;
}
interface Girl extends Person, Pro {
  height: number;
  hobby: string[];
}
interface Boy extends Person {
  salary: number;
  car: string;
}

let xf: Girl = {
  name: "⼩芳",
  age: 18,
  address: "北京",
  height: 170,
  hobby: ["逛街", "买买买"],
  phone: "华为",
  coat: "安踏",
};

//=============================================================================================================
// 多层继承:需要实现该接⼝以及所继承的接⼝和继承接⼝的接⼝
interface Person{
 name:string,
 age:number,
 address:string
}
interface Girl extends Person{
 height:number,
 hobby:string[]
}
interface Xh extends Girl{
 hair:string
}
let xh:Xh={hair:"红⾊",height:170,hobby:["买买买"],name:"⼩红",age:18,address:"北京"}


//=============================================================================================================
// 接⼝同名会合并,名字相同的接⼝不会冲突，⽽是会合并为⼀个
interface Person{
 name:string,
 age:number,
 address:string
}
interface Person{
 salary:number
}
let xm:Person={name:"⼩明",age:17,address:"beijng",salary:3500}



//=============================================================================================================
// interface 与 type 的区别有下⾯⼏点。
// （1） type 能够表示⾮对象类型，⽽ interface 只能表示对象类型（包括数组、函数等）。
// （2） interface 可以继承其他类型， type 不⽀持继承。
// （3）同名 interface 会⾃动合并，同名 type 则会报错
// （4） interface 不能包含属性映射（mapping）， type 可以
interface Point {
x: number;
y: number;
}
// 正确
type PointCopy1 = {
[Key in keyof Point]: Point[Key];
};
// 报错
interface PointCopy2 {
[Key in keyof Point]: Point[Key];
};

// 一句话总结：interface 适合定义对象类型，支持继承和自动合并；type 适合定义各种类型，不支持继承但支持属性映射。