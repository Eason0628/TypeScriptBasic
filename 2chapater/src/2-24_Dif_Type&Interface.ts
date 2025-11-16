// interface 和 type 区别
//     type 和接口类似，都用来定义类型，但 type 和 interface 区别如下：
// 区别 1：定义类型范围不同interface 只能定义对象类型或接口当名字的函数类型。
// type 可以定义任何类型，包括基础类型、联合类型，交叉类型，元组。

// type 定义基础类型
// type num=number

// type 定义联合类型例子1：
// type baseType=string |number | symbol

// type 定义联合类型例子2：
// interface Car { brandNo: string}
// interface Plane { No: string; brandNo: string}
// type TypVechile = Car| Plane

// 元组
// interface Car { brandNo: string}
// interface Plane { No: string; brandNo: string}
// type TypVechile = [Car, Plane]

// 区别 2：接口可以extends一个或者多个接口或类实现一个或者多个接口，也可以继承 type，
//        但 type 类型没有继承功能但一般接口继承类和type 的应用场景很少见，记住有这样的语法即可。

// 区别 3：用 type 交叉类型 & 可让类型中的成员合并成一个新的 type 类型，但接口不能交叉合并但可以声明合并
// type Group = { groupName: string, memberNum: number }
// type GroupInfoLog = { info: string, happen: string }
// type GroupMemeber = Group & GroupInfoLog// type 交叉类型合并

// let data: GroupMemeber = {
//   groupName: "001", memberNum: 10,
//   info: "集体爬山", happen: "中途有组员差点滑落,有惊无险",
// }
// export { }

// 区别 4：接口可合并声明 
// 定义两个相同名称的接口会合并声明，定义两个同名的 type 会出现编译错误
// interface Error {
//   name: string;
// }

// interface Error {
//   message: string;
//   stack?: string;
// }
// // 接口合并
// let error: Error = {
//   message: "空指针",
//   name: "NullPointException"
// }


// 如何选择
//1.定义对象类型选接口,因为其可以继承,type类型没有继承。
//2.接口可以合并，如果我们想把其他源码里面的接口拿过来使用，但是想增加一些自己的类型，就可以利用接口合并的特性。

