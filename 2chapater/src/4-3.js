function Vechile(brandNo, price) {
  console.log("this:", this)
  // 父类
  this.brandNo = brandNo // 品牌
  this.price = price // 价格
}
Vechile.prototype.sale = function () {
  console.log(this + " 销售")
}

// 继承
function Bus(brandNo, price, seatNo) {
  // 子类
  Vechile.apply(this, [brandNo, price]) // 借用构造函数继承
  this.seatNo = seatNo
}
// 原型链继承
Bus.prototype = new Vechile()
Bus.prototype.constructor = Bus

let bus = new Bus("大巴", 20, 64)
console.log("bus:", bus)
bus.sale()
function Car(brandNo, price, type) {
  Vechile.call(this, brandNo, price)
  this.type = type
} // 子类

//凯美瑞旗舰版
