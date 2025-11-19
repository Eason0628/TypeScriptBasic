// 单件模式
class DateUtil {
  static dateUtil = new DateUtil() // 立即创建单件模式
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
console.log("abc")
// const dateUtil1 = DateUtil.dateUtil
// const dateUtil2 = DateUtil.dateUtil
// console.log(dateUtil1 === dateUtil2)
// console.log(dateUtil1 === dateUtil2)
// console.log(dateUtil1 === dateUtil2)
// dateUtil1.formatDate()
//let x: string = undefined
export default DateUtil.dateUtil
export {}
