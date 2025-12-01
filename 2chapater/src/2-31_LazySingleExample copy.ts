class DateUtil {
  static dateUtil: DateUtil
  private constructor() {
    console.log("创建对象...")
  }
  static getInstance() {
    if (!this.dateUtil) {
      this.dateUtil = new DateUtil()
    }
    return this.dateUtil
  }

  formatDate() {
    console.log("fomatDate")
  }
  diffDateByDay() {} // 两个日期之间的天数计算
  diffDateByHour() {} // 两个日期之间的小时计算
  timeConversion(restTime: number) {} // 天 时 分 秒
}
console.log("abc")
// const dateUtil1 = DateUtil.getInstance()
// const dateUtil2 = DateUtil.getInstance()
// console.log(dateUtil1 === dateUtil2)
// const dateUtil3 = DateUtil.getInstance()
// const dateUtil4 = DateUtil.getInstance()
//let str: string = undefined
export {}
