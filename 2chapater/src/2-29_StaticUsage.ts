// 项目中何时调用静态成员,一些方法外部调用的时候只需要一个实例,就可以调用静态方法
export default class DateUtil {
  static formatDate() {}
  static diffDateByDay() {} // 两个日期之间的天数计算
  static diffDateByHour() {} // 两个日期之间的小时计算
  static timeConversion(restTime: number) {} // 天 时 分 秒
}

//DateUtil.formatDate()
//  1.静态方法
//  2.单例模式

export {}
