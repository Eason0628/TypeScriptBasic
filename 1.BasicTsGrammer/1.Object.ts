// 0.数组类型：
let stringArray: string[] = ["a", "b", "c"];
let stringArray2: Array<string> = ["a", "b", "c"];



// 1.任意类型：
// 对象的属性可以是任意类型[propName:string],任意属性的数量可以以是任意的(propName是规范写法)
let Obj: { name: string; [key: string]: any } = {
  name: "张三",
  salary: 10000,
};
let Obj2: { name: string; [propName: string]: string } = {
  name: "张三",
  level: "高级",
  salary: "10000",
};
console.log(JSON.stringify(Obj2));

// 1.1 任意类型说明：
// propName代表属性名，肯定是字符串，propName只是形参，可以换成别的名字,任意属性只有⼀个没有多个，因为它代表了其他的所有属性
// 任意属性的类型⼀定是对象中的其他类型（包含必填属性、可选属性）的⽗类，即任意类型一定要包含对象中已定义的属性类型，否则会报错！
// 例如，如果任意属性类型这样写就有问题，因为任意属性类型要求必须包含name属性类型(对象中已经定义的属性的类型)，否则会报错!
// let testObj3:{name:string,[propName:string]:number}={name:"张三",salary:10000}
// 任意属性案例
let obj3: {
  likes: string[];
  pet: { name: string; age: number };
  [propName: string]: object;
} = {
  likes: ["篮球", "足球"],
  pet: { name: "小白", age: 1 },
  hobbies: { name: "编程", level: "高级" },
  tags: { name: "标签", value: "全栈", skill: ["ts", "js", "html", "css"] },
};

// 2.只读属性：readonly修饰符可以将对象属性设置为只读，无法修改
let readonlyObj: { readonly name: string; age: number; gender?: "小学生" } = {
  name: "张三",
  age: 20,
  //gender: "大学生", //----这里会报错，因为这样写gender: "小学生"意味着这个属性是值类型，指定gender的值只能是"小学生"
};
// readonlyObj.name="李四" //只读属性不能修改



// 3.对象数组：对象数组是指数组中的元素是对象类型。
let obj4:{name:string,age:number}[]=[{name:"张三",age:20},{name:"李四",age:21}] 