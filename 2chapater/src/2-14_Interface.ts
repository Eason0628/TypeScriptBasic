interface Product {
  name: string
  price: number
  account: number
  buy(): void
}

function getProduct(p: Product) {
  console.log(p)
}
let p: Product = {
  name: "phone",
  price: 100,
  account: 10,
  buy() {},
}
getProduct(p)




interface Pet {
  //宠物
  name: string
  love: number
  health: number
  toHealth(): void
}

interface Dog extends Pet {
  strain: string
  guradHome(): void
}



interface List {
  add(): void
  remove(): void
}
class ArrayList implements List {
  add(): void {
    throw new Error("Method not implemented.")
  }
  remove(): void {
    throw new Error("Method not implemented.")
  }
}

class LinkedList implements List {
  add(): void {
    throw new Error("Method not implemented.")
  }
  remove(): void {
    throw new Error("Method not implemented.")
  }
}



// 接口的定义
// 接口是 TypeScript 中另一种定义对象类型的方式，用于规范对象的结构，明确其包含的属性和方法。

// 接口应用场景解析
// 1.第三方包或框架底层源码：像 Vue、React 等框架的底层源码中，大量使用接口来定义组件、工具函数等的类型结构，确保类型的一致性和可维护性。
// 2.方法的对象类型参数：当方法需要接收一个对象作为参数时，用接口定义该对象的类型，能明确参数的结构要求，例如定义一个处理用户信息的函数，用接口规定用户对象需包含姓名、年龄等属性。
// 3.同类类的统一声明：若多个类属于同一类别（如不同的支付方式类），可通过接口统一声明它们共有的方法和属性，使这些类在实现时遵循统一规范。

// 接口的定义与继承
// 定义接口：通过 interface 关键字来声明，例如 interface User { name: string; age: number; }。
// 继承接口：新接口可继承原有接口的属性和方法，并添加新的内容，比如 interface VipUser extends User { vipLevel: number; }，这样 VipUser 接口就包含了 User 接口的属性以及自身的 vipLevel 属性。