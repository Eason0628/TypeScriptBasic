interface Person {
  name: string;
  age: number;
}
type obj = { gender: boolean; like: string[] };

var c = String;
// export { type Person, type obj, c }; //type用来说明导出的是类型,语义更清晰


// 如果只是想导出类型，可以这样写：
export type { Person, obj };
