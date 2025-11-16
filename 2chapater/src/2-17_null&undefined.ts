let str: string | undefined = undefined
console.log("str:", str)

function fn(data?: string) {
  if (data) data.toString()
}
fn()
// Question: 哪些类型可以接受 undefined？
//  any,unknown,undefined 可以接受 undefined
//  any,unknown,null 可以接受 null
let data: unknown = undefined

export {}
