//“函数类型定义”的时候定义了几个参数，
//函数赋值的时候可以省略，不会报错
let fn:(a:number, b:number) => number;
fn = (a:number) => a;//正确

//“函数定义”的时候，规定了几个形参，就要传几个实参
function fn2(a:string,b:number):number{
    return 123
}
fn2("A")//错误，缺少一个实参


// ====================================================================
// function fn(a: number, ...rest) { // 可变参数Js中是一个数组，TS中需要指定类型
//     console.log(a, rest);
// }
// function(1,2,3,4)


// ====================================================================
// 可变参数TS指定类型
// 1. 剩余参数元组可选（第2/3个参数可省略）
function fn(a: number, ...rest: [string?, number?]) {}
fn(1); // ✅ 合法
fn(1, "a"); // ✅ 合法
fn(1, "a", 1); // ✅ 合法
fn(1, "a", 1, 2); // ❌ 错误，超过了剩余参数的定义

// 2. 剩余参数为可变长度数组（任意多个string+number组合）
function fn(a: number, ...rest: (string | number)[]) {}
fn(1, "a", 1, "b", 2); // ✅ 合法

// 3. 剩余参数元组+剩余元素（固定2个+任意多个number）
function fn(a: number, ...rest: [string, number, ...number[]]) {}
fn(1, "a", 1, 2, 3); // ✅ 合法


// ====================================================================
let obj: {
    run: (height: number) => void
}

obj = {
    run: function(height: number) {
        console.log("i can run ")
    }
}

// ====================================================================
// 闭包写法，函数的返回值是一个函数
function fn(a: number, b: string): () => void {
    return function() { console.log(123) }
}

