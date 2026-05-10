// import { Person, obj } from "./C"; 
import type { Person, obj } from "./C"; //如果引入的只是类型，可以使用type来引入，语义更清晰

let p: Person = {
  name: "张三",
  age: 18,
};

let o: obj = {
  gender: true,
  like: ["篮球"],
};

console.log(p);
console.log(o);
