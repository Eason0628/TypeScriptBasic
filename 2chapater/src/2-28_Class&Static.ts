// 2-28 类，静态属性，何时用静态属性？
// 定义：类就是拥有相同属性和方法的一系列对象的集合。
// 展开理解：类是一个模具，是从该类包含的所有具体对象中抽象出来的一个概念，类定义了它所包含的全体对象的静态特征和动态特征。
// 举例：
// people 类
// 静态特征【属性】name, age, address, phone
// 动态特征【方法】doEat, doStep
// desk 类
// 静态特征【属性】height, width, color, price, brandno, material
// 动态特征【方法】load
// order 订单类
// 静态特征【属性】orderid, ordertime, custname
// 动态特征【方法】createOrder, modifyOrder, delOrder, chargeBack

class People {

   name!: string // 非空断言运算符，告诉编译器，我确定这个属性一定有值，不会是 undefined 或 null。  !是自动忽略掉undifined或 nul
  //name?: string
  age?: number
  addr?: string
  static count: number = 0;
  constructor(_name: string, _age: number, _addr: string) {
    this.name = _name
    this.age = _age
    this.addr = _addr
    People.count++
  }
  doEat() {}
  doStep() {}
}

let p1 = new People("wangwu", 23, "白家庄")
let p2 = new People("wangwu", 23, "白家庄")
console.log(People.count);

// 静态成员(静态属性+静态方法)
export {}