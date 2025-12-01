// 单件模式：一个类只允许外部获取唯一的一个实例
class DateUtil {
  // 所有的静态成员，不管是属性还是方法。都是直接放到类所指向的构造函数对象空间里的。
  static dateUtil = new DateUtil() //单例，对象内存中指向唯一的一个实例

  private constructor() {
    console.log("创建对象...")
  }
  formatDate() {
    console.log("fomatDate")
  }
  diffDateByDay() {} // 两个日期之间的天数计算
  diffDateByHour() {} // 两个日期之间的小时计算
  timeConversion(restTime: number) {} // 天 时 分 秒
}
const dateUtil1 = DateUtil.dateUtil
const dateUtil2 = DateUtil.dateUtil
console.log(dateUtil1 === dateUtil2) 
 
dateUtil1.formatDate()
//let x: string = undefined
export default DateUtil.dateUtil
export {}
