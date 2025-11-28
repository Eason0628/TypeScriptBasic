class Pay {
  constructor(bank_card_no: string, balance: number, cost: number, tokenid: string) {
    this.bank_card_no = bank_card_no
    this.balance = balance
    this.cost = cost
    this.tokenid = tokenid
  }
  // 支付父类
  bank_card_no: string //捆绑银行卡号
  balance: number //银行卡余额
  cost: number // 消费费用
  tokenid: string //登录后用户访问令牌
  pay() {
    console.log("支付银行卡卡号:", this.bank_card_no)
  }
}

enum PayType {
  WebChat = 1,
  AliPay = 2,
  CloudFlashPayment = 3,
}

// 银行卡支付
class BankPay extends Pay {
  bank_network!: string //银行网点
  bankno_type!: number //银行卡类型
  bank_card_psw!: string //银行卡密码
  custname!: string //顾客姓名
}

class MobilePay extends Pay {
  constructor(
    bank_card_no: string,
    balance: number,
    cost: number,
    tokenid: string,
    type: PayType,
    change: number,
    openid: string,
    appid: string
  ) {
    super(bank_card_no, balance, cost, tokenid)
    this.type = type
    this.change = change
    this.opendid = openid
    this.appid = appid
  }
  type: PayType
  change: number //支付平台零钱
  opendid: string //用户识别身份id;
  appid: string // 小程序 appid
  //....
  pay() {
    super.pay()
    //....完成支付过程
    console.log("完成支付")
  }
}

class Customer {
  pay(payMethod: BankPay | MobilePay) {
    // if (payMethod instanceof MobilePay) {
    //   //payMethod.
    // } else if (payMethod instanceof BankPay) {
    //   //payMethod
    // }
  }
}

function isMobilePay(payMethod: any): payMethod is MobilePay {
  return payMethod instanceof MobilePay
}

let webChatPay = new MobilePay("1111", 300, 100, "1asf3q", PayType.WebChat, 10, "111asdf", "asdfsdf11")
console.log(webChatPay)
webChatPay.pay()
let cust = new Customer()
cust.pay(webChatPay)

export {}
