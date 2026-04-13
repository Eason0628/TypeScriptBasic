// keyof运算符接受⼀个对象类型作为参数，返回该对象的所有键名组成的联合类型。
// keyof 类型别名
// keyof {}

type Person={name:string,age:number}
type MyType=keyof Person //   取出对象所以属性名 name | age

//type MyType=keyof {name:string,age:number} // name|age
let a:MyType="name" // a:MyType之后，赋值只能是"name"或者"age"


