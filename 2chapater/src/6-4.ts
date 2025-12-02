class ArrayList<T = any> {
  arr: Array<T>
  index: number = 0
  constructor() {
    this.arr = []
  }
  add(ele: T) {
    this.arr[this.index++] = ele
  }
  get(index: number) {
    return this.arr[index]
  }
}
let arrList = new ArrayList()
arrList.add("Abc")
console.log(arrList)
console.log(arrList.get(0))

let arrList2 = new ArrayList<{ username: string; age: number }>()
arrList2.add({ username: "wangwu", age: 23 })

export {}
