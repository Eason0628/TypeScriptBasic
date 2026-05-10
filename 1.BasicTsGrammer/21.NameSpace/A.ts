namespace Utils {
  export function fn() {
    //如果不加export,只能在该命名空间内使⽤
    console.log(1);
  }
  export var a = 1;
}
//使⽤命名空间内的函数/变量
Utils.fn();



