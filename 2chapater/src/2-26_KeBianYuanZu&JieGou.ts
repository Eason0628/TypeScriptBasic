// let customers: [string, number,string,string,string] =
// ["wangwu", 23, "海口海淀岛四东路3号", "133123333", "一路同行,一起飞"]

// 可变元组
let customers: [string, number, string, ...any[]] = [
  "wangwu",
  23,
  "海口海淀岛四东路3号",
  "133123333",
  "一路同行,一起飞",
  "weixin",
]

// 可变元组解构
let [custname, age, address, ...rest]: [string, number, string, ...any[]] = [
  "wangwu",
  23,
  "海口海淀岛四东路3号",
  "133123333",
  "一路同行,一起飞", //因为是...any[],所以结构时可以有多个元素
  "weixin",
  "239999",
]
console.log("rest:", rest)
