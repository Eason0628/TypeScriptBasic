// 汽车租赁功能实现: 有小轿车,大巴,卡车三种类型的车,顾客可以租任意一种或多种不同类型的车,按照租用的天计算租金， 同时为了响应国家对各类车安全的管理, 对在租赁期内有过各种超载，超乘客数，酒后驾车等违规的车需额外支付一定的费用。
export class Vechile {
  static count: number = 3
  public brand: string // 品牌
  public vechileNo: string // 车牌号
  public days: number // 租赁天数
  public total: number = 0 // 支付的租赁总费用
  constructor(brand_: string, vechileNo_: string, days_: number) {
    this.brand = brand_
    this.vechileNo = vechileNo_
    this.days = days_
  }

  public calculateRent() {
    console.log(this.brand + " 车牌号为:" + this.vechileNo + "开始被租")
    return 0
  }
}

class Car extends Vechile {
  public type: string // 车的型号
  constructor(brand_: string, vechileNo_: string, days_: number, type_: string) {
    super(brand_, vechileNo_, days_)
    this.type = type_
  }
  test() {}
  // 根据车的型号来获取租用一天该型号车的租金
  public getPriceByType() {
    let rentMoneyByDay: number = 0 //每天的租金
    if (this.type === "普拉多巡洋舰") {
      rentMoneyByDay = 800
    } else if (this.type === "凯美瑞旗舰版") {
      rentMoneyByDay = 400
    } else if (this.type === "威驰智行版") {
      rentMoneyByDay = 200
    }
    return rentMoneyByDay
  }

  public calculateRent() {
    super.calculateRent()
    console.log("小轿车租赁...")
    return this.days * this.getPriceByType()
  }
}

class Bus extends Vechile {
  public seatNum: number // 座位数
  constructor(brand_: string, vechileNo_: string, days_: number, seatNum_: number) {
    super(brand_, vechileNo_, days_) //使用父类的构造函数的好处
    this.seatNum = seatNum_
  }

  public getPriceBySeatNum() {
    //计算租赁价格
    let rentMoneyByDay: number = 0 //每天的租金
    if (this.seatNum <= 16) {
      rentMoneyByDay = 800
    } else if (this.seatNum > 16) {
      rentMoneyByDay = 1600
    }
    return rentMoneyByDay
  }
  public calculateRent() {
    super.calculateRent()
    return this.days * this.getPriceBySeatNum()
  }
}

class Truck extends Vechile {
  ton!: number // 座位数
  constructor(brand_: string, type_: string, days_: number, ton_: number) {
    super(brand_, type_, days_)
    this.ton = ton_
  }

  CalRentPrice() {
    //计算租赁价格
    let rentMoneyByDay: number = 0 //每天的租金
    if (this.ton <= 500) {
      //500吨
      rentMoneyByDay = 750
    } else if (this.ton > 500) {
      rentMoneyByDay = 1350
    }
    return rentMoneyByDay
  }
  public calRent() {
    return this.CalRentPrice() * this.days
  }
}
//const data = { username: "wangwu", age: 23 }
class Customer {
  rent(vechile: Vechile) {
    console.log("type" in vechile)
    let car = vechile as Car
    console.log("car.type:", car.type)
    return car.calculateRent()
  }
}

let cust: Customer = new Customer()
let vechile: Vechile = new Car("AA", "一定", 30, "普拉多巡洋舰")
cust.rent(vechile)
//let car: Car = vechile as Car
let car: Car = <Car>vechile
car.calculateRent()
vechile = new Truck("AA", "一定", 30, 300)
let truck: Truck = vechile as Truck
truck.calculateRent()

export {}
