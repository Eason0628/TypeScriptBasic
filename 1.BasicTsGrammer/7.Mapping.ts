// 映射类型：基于旧类型创建新类型（对象类型），减少重复，提升开发效率

//基本使⽤
type My="a"|"b"|"c"
type MyType={[key in My]:number} //{a:number,b:number,c:number}
let obj: MyType = {a: 1, b: 2, c: 3} 

// ====================================================
