// 交叉类型（Intersection Types）⽤于组合多个类型，⽣成⼀个包含所有类型特性的新类型。
// 可以理解为将多个类型合并为⼀个更⼤的类型，新类型拥有所有原始类型的成员。使⽤ & 符号表示交叉类型。


type Person={name:string,age:number}
type Emp={salary:number,address:string}
interface InterfaceObj{
    weight:number
}
type C=Person&Emp&{height:number}&InterfaceObj
let obj:C={name:"张三",age:18,salary:3500,address:"beijing",height:180,weight:150}

