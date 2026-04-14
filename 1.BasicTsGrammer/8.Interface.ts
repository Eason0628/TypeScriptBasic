// 接⼝其实就是相当于定义⼀个模板，以后声明的对象都得根据这个模板要求来
interface Person {
  name: string;
  age: number;
  readonly salary: number;
  like: string[];
  run?: () => void;
  // 任意属性,propName属性名随意写，属性值必须包含在类型中(其它类型)，否则会报错
  [propName: string]: string | number | string[] | (() => void);
}
