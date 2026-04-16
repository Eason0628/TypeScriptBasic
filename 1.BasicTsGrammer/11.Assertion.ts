// type C=string|number
function fn(m: string | number) {
  (m as string).substring(1);
}
fn(100); //编译的时候不会报错，但是项目运行的时候会报错，因为100是number类型，number类型没有substring方法，所以断言只是告诉编译器m是string类型，不用检查类型是否正确。

//=============================================================================================================
interface Boy {
  name: string;
  make: () => number;
}
interface Girl {
  name: string;
  cost: () => void;
}
function fn(obj: Boy | Girl) {
  (obj as Boy).make();
}

//=============================================================================================================
let student = {} as { name: string };
student.name = "张三";

//=============================================================================================================
// 将任何⼀个类型断⾔为any类型
let num: number = 1;
console.log((num as any).length);

// 将any断⾔为任意类型
//=============================================================================================================
let a: any = 5;
console.log((a as number).length); //报错

//=============================================================================================================
// 将⽗类断⾔为⼦类
class Students {
  make() {
    console.log("make");
  }
}
class Xm extends Students {
  run() {
    console.log("run");
  }
}
let a = new Students();
(a as Xm).run(); //编译通过，运⾏报错
