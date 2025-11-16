// 可索引签名
interface Product {
  name: string
  price: number
  account: number
  [x: string]: any
}
let p: Product = {
  name: "ok",
  price: 100,
  account: 100,
  //descri1:"ok",
  [Symbol("stockno")]: 1000,
  100: "0k",
}
export {}
