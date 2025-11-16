// Typescript的枚举分数字枚举和字符串枚举。

//  数字枚举(双向映射 key取value，value也可以取key)
enum Week {
  Monday = 1, //如果第一个对象给了1，如果给了10 后续就是11 12 ..
  Tuesday,    //后续对象默认递增1 Tuesday=2 Wensday=3...
  Wensday,
  ThirsDay,
  Friday,
  Sarturday,
  Sunday,
}
//  字符串枚举(和普通对象没区别，没有双向映射)
enum WeekEnd {
  Monday = "MyMonday",
  Tuesday = "Tuesday",
  Wensday = "Wensday",
  ThirsDay = "ThirsDay",
  Friday = "Friday",
  Sarturday = "Sarturday",
  Sunday = "Sunday",
}

console.log(Week.Monday);
console.log(Week["Monday"]);
console.log(Week[1]); // Monday   数字枚举可以值取key  vulue →  key

// console.log(WeekEnd["MyMonday"]); // --报错 注意：字符串枚举不可以值取key  vulue →  key
// console.log(WeekEnd[0]) // --报错  字符串枚举不能用下标， 所以字符串枚举只能 key → vulue 
export {}
