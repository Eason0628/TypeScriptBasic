interface Ref<V> {
  value: V
}

let ref: Ref<string> = {
  value: "abc",
}
type Student = { name: string; age: number }
let ref2: Ref<Student> = {
  value: { name: "wangwu", age: 23 },
}
console.log(ref2.value.name)

export {}
