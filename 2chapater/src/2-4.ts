interface Student {
   name:string,
   age:number
}
// 类型注解
let data:number=3;
let stuObj:Student={// 增加了 Student 赋值时的属性个数和类型必须完全匹配 Student 
  name:"wangwu",
  age:23,
  //address:'beijing'//“address”不在类型“Student”中
}

let str:string="abc";
console.log(str.length);
str.length


// 类型推导
let money=false;
let stuObj2={// 没有类型，就没了限定，增加或改变不会有错误
  name:"wangwu",
  age:"Abc",
  address:'beijing'// 不会有错误
}



export {}
