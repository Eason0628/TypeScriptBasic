let symid = Symbol("userid")
let user = { [symid]: 101, username: "wangwu", age: 23 }
let usrname = "username"
let userid = user[symid]
let username = user[usrname as any]
test({ username: "wangwu", age: 23 })
function test(data: unknown) {}
export {}
