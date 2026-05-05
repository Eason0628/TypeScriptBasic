// js中的class
class Parent {
  constructor(x) {
    this.x = x;
    this.sayHello = function () {
      console.log("sayHello");
    };
  }
  getX() {
    console.log("getX==>", this.x);
  }
}

// 对比ts中的class
// ts中class类构造函数⾥ ⽤到的所有属性，必须提前定义类型
class Person {
  //实例属性
  name: string = "张三"; //可以在定义的时候直接赋初始值
  age: number;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //类属性(静态属性) 只能通过类名访问和修改，对象实例访问不到
  static count: number = 100;
  //只读属性
  readonly sex: string = "boy";
  eat() {
    console.log("我在吃饭");
  }
  //静态⽅法
  static sleep() {
    console.log("我睡觉呢");
  }
}
