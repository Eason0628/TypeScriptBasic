// 映射类型：基于旧类型创建新类型（对象类型），减少重复，提升开发效率

//基本使⽤
type My="a"|"b"|"c"
type MyType={[key in My]:number} //{a:number,b:number,c:number}


//配合keyof使⽤
type Props={a:number,b:string,c:boolean}
type MyType={[key in keyof Props]:Props[key]} //{a:number,b:string,c:boolean}
let obj:MyType={a:123,b:"2",c:true}


//配合可选属性使⽤
type My="a"|"b"|"c"
type MyType={[key in My]?:number} //{a?:number,b?:number,c?:number}
let obj:MyType={a:123}

