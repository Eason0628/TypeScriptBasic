// Vue3 源码中的泛型约束
class ObjectRefImpl<T extends object, K extends keyof T> {
  public readonly __v_isRef = true

  constructor(private readonly _object: T, private readonly _key: K) {}

  get value() {
    return this._object[this._key]
  }

  set value(newVal) {
    this._object[this._key] = newVal
  }
}
type ObjTyp = { username: string; age: 23 }
type ObjKeysType<T extends object, K> = K extends keyof T ? K : never
type TestObjKeysTyp = ObjKeysType<ObjTyp, 1>
const obj = new ObjectRefImpl<ObjTyp, "age">({ username: "lisi", age: 23 }, "age")
console.log("obj.value:", obj.value)

export {}
