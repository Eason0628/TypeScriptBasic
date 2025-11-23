// 可变元组解构
// custname_: string, age_: number 这里是给变量 custname, age 起别名，
// 唯一需要注意的是...rest_: any[]给可变元组元素起别名时， ...+变量名 , ...any[] 变成 ...rest_(变量名): any[]
let [custname, age, address, ...rest]: [custname_: string, age_: number, address_: string, ...rest_: any[]] = [
  "wangwu",
  23,
  "海口海淀岛四东路3号",
  "133123333",
  "一路同行,一起飞",
  "weixin",
  "239999",
]
console.log("rest:", rest)

export {}
