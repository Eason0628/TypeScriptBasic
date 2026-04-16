// 交叉类型（Intersection Types）⽤于组合多个类型，⽣成⼀个包含所有类型特性的新类型。
// 可以理解为将多个类型合并为⼀个更⼤的类型，新类型拥有所有原始类型的成员。使⽤ & 符号表示交叉类型。
// 注意不要对基本类型使⽤,只能对对象类型使⽤交叉类型。例如type C=string&number是错误的。
type Person={name:string,age:number}
type Emp={salary:number,address:string}
interface InterfaceObj{
    weight:number
}
type C=Person&Emp&{height:number}&InterfaceObj     //只要是对象类型都可以使用交叉类型
let obj:C={name:"张三",age:18,salary:3500,address:"beijing",height:180,weight:150}

//对于接口来说也可以实现交叉类型，通过同名接口合并、接口继承来实现。



