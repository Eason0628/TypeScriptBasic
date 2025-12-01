class Customer {
  cust!: string
  age: number = 23
  doEat() {}
}

Object.keys(Customer.prototype).forEach((item) => {
  console.log("item:", item)
})
export {}
