interface Product {
  name: string
  price: number
  account: number
  buy(): void
}

function getProduct(p: Product) {
  console.log(p)
}
let p: Product = {
  name: "phone",
  price: 100,
  account: 10,
  buy() {},
}
getProduct(p)
interface Pet {
  //宠物
  name: string
  love: number
  health: number
  toHealth(): void
}

interface Dog extends Pet {
  strain: string
  guradHome(): void
}

interface List {
  add(): void
  remove(): void
}

class ArrayList implements List {
  add(): void {
    throw new Error("Method not implemented.")
  }
  remove(): void {
    throw new Error("Method not implemented.")
  }
}

class LinkedList implements List {
  add(): void {
    throw new Error("Method not implemented.")
  }
  remove(): void {
    throw new Error("Method not implemented.")
  }
}
