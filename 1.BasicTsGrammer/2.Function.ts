function fun(m: string, n: number): void {
  m + n;
}

// 函数声明函数
function fun1(m: string, n: number): string {
  return m + n;
}

// 变量声明函数
let fun2 = function (m: string, n: number): string {
  return m + n;
};

// 箭头函数
let fun3 = (m: string, n: number): string => {
  return m + n;
};

//函数类型变量声明
let fun4: () => void;
// fun4=()=>{
//     console.log("函数类型声明的箭头函数调用")
// }

// fun4 = function () {
//   console.log("函数类型声明的函数调用");
// };


// 1.声明函数类型两种方式
// let fun5:(a:number)=>{aeg:number}
// 2.1定义函数实现，箭头函数
// fun5=(a)=>{
//   return {aeg:a}
// }
// const result=fun5(100)
// console.log(result.aeg)

// 2.2定义函数实现，函数表达式
// fun5=function (a:number):{aeg:number}{
//   return {aeg:a}
// }
// const result=fun5(100)
// console.log(result.aeg)


// 1.声明函数类型的同时定义函数实现，两种方式
// let fun5:(a:number)=>{aeg:number}=function (a:number):{aeg:number}{
//   return {aeg:a}
// }
let fun5:(a:number)=>{aeg:number,name?:string}=(a:number):{aeg:number}=>{ return {aeg:a} }//可选参数必须接在必需参数后⾯。换句话说，可选参数后⾯不允许再出现必需参数了












