// 1.函数中使⽤泛型
function identity<T>(arg: T): T {
return arg;
}
identity<Number>(100)
//或者identity(100) 在 TypeScript 中，在调⽤泛型函数时，如果没有显式地指定泛型类型参数，
//编译器会进⾏类型推断。根据传⼊的实际参数类型，编译器可以推断出泛型类型参数的类型，使得函数调⽤仍然是正
// 确的


//多个类型参数
function identity<T,U>(arg: T,arg2 : U): T {
return arg;
}
identity<Number,String>(4,"hello")

//=============================================================================================================
// 2.接⼝中使⽤泛型
interface Person<N> {
name: string;
age: N;
}
const xiong: Person<string> = {
name: "xiong",
age: "18"
// age: 18 //报错
};

//=============================================================================================================
// 3.类中使⽤泛型
class Person<T>{
 name:T,
 age:number
 constructor(name:T,age:number){ //Ts和Es6不同，Ts在类中使用属性时，需要在构造函数中初始化，否则会报错，而Es6可以不初始化
 this.name = name
 this.age = age
 }
}
const xiong = new Person<string>('xiong',18)
console.log(xiong.name,xiong.age) // xiong 18


//=============================================================================================================
// 4.泛型案例
function fn<T>(a:T):T{
 return a
}
interface Person{
 name:string,
 age:number
}
type C="a"|"b"|"c"
fn<(()=>void)>(()=>{console.log(1)})
fn<Person>({name:"⼩明",age:18})
fn<C>("b")
fn<string[]>(["a","b"])

//=============================================================================================================
// 5.泛型也可以⽤来定义数组
let arr2:Array<number>=[2,3,4] //Array是⼀个内置接⼝，接受⼀个T类型

//=============================================================================================================
// 6.类型别名中使⽤泛型
type C<T>={value:T}
let obj:C<string>={value:"hello"}

//=============================================================================================================
// 7.多个类型参数
function fn<T,U>(arr:T[],f:(arg:T)=>U):U[]{
 return arr.map(f)
}
fn<string,number>(["1","2","3"],(item)=>parseInt(item))


//=============================================================================================================
// 8.类型参数默认值
function fn<T=string>(m:T){
 return m
}
fn(123)//正确 因为类型推断覆盖掉了默认类型


// 类型参数默认值多⽤于class中
class Person<T=string>{
 list:T[]=[];
 add(t:T){
 this.list.push(t)
 }
}
let xm=new Person()
xm.add("4")//正确
xm.add(4)//错误

//=============================================================================================================
// 9.1泛型约束
function loggingIdentity<T>(arg: T): T {
console.log(arg.length);
return arg;
}
// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'T'.


// 对比：泛型约束的作用,extends string
function loggingIdentity<T extends string>(arg: T): T {
console.log(arg.length);  //正确
return arg;
}

//=============================================================================================================
// 9.2泛型约束
interface Person{
 name:string,
 age:number
}
function fn<T extends Person>(person:T){
 
}
fn<{name:string,age:number,salary:number}>({name:"张三",age:18,salary:3500})

//=============================================================================================================
// 9.2.1泛型约束
let obj={a:1,b:2,c:3}
function fn<T extends keyof U ,U>(a:T,b:U){
}
fn("a",obj)

//=============================================================================================================
// 9.2.2泛型嵌套
interface Box<T>{
 item:T
}
interface Person<T>{
 name:T
}
let obj:Box<Person<string>>={
 item:{
 name:"hello"
 }
}
///////////////本质就是带泛型的类型整体看成⼀个类型
interface Box<T>{
 item:T
}
interface Person<T>{
 name:T
}
let obj:Box<Box<string>>={
 item:{
 item:"hello"
 }
}