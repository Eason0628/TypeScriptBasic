//  数字枚举(双向映射 key取value，value也可以取key)
enum Week {
  Monday = 1, //如果第一个对象给了1，
  Tuesday,    //后续对象默认递增1 Tuesday=2 Wensday=3...
  Wensday,
  ThirsDay,
  Friday,
  Sarturday,
  Sunday,
}
//  字符串枚举
enum WeekEnd {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wensday = "Wensday",
  ThirsDay = "ThirsDay",
  Friday = "Friday",
  Sarturday = "Sarturday",
  Sunday = "Sunday",
}

console.log(Week.Monday);
console.log(Week["Monday"]);
console.log(Week[0]); // Monday
export {}
