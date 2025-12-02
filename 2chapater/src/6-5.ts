class Order {
  orderid!: number
  ordername!: string
  static count: number
  printOrd() {}
  static getCount() {}
}

type InstancePropKeys<T extends object> = keyof T
type OrdPropKeys = InstancePropKeys<Order>

//type OrdIdType = Order["orderid"]
///type OrdInstanceAttrNames = keyof Order
//let oian:OrdInstanceAttrNames="ordername"
