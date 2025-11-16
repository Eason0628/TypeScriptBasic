const symid = Symbol("productno")
interface Product {
  [symid]: number
  name: string
  price: number
  account: number
  buy(): string
}

type A = Product["price"]
type B = Product["price" | "name"]
type S = Product[typeof symid]

type PKeys = keyof Product // "name"|"price"|"account"|"buy"|typeof symid
let pKeys: PKeys = "account"
//let pKeys2: "name"|"price"|"account"|"buy"|typeof symid=""

type AllKeys<T>=T extends any?T:never
type Pkeys2=AllKeys<keyof Product>
// 鼠标悬停Pkeys2 可以获取到 Pkeys2 类型为 "name"|"price"|"account"|"buy"|typeof symid
export {}
