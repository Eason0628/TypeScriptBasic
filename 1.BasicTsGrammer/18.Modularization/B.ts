import c, { a, b } from "./A"; //导入时，默认导出在{}之外，命名导出在{}之内
console.log(a, b, c);
b()