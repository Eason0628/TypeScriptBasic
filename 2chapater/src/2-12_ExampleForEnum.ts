export enum EnumAuditStatus {
  MANAGER_ADUIT_FAIL = -1, //第一个常量值设置为-1
  NO_ADUIT, // 0
  MANAGER_ADUIT_SUCCESS, // 1
  FINAL_ADUIT_SUCCESS, //  2
}

type Expense = {
  id: number
  events: string
  time: Date
  enumAuditStatus: EnumAuditStatus
}

// 审核类
class MyAduit {
  getAduitStatus(status: EnumAuditStatus, expense: Expense): void {
    if (status === EnumAuditStatus.NO_ADUIT) {
      console.log("没有审核")
    } else if (status === EnumAuditStatus.MANAGER_ADUIT_SUCCESS) {
      expense.enumAuditStatus = EnumAuditStatus.MANAGER_ADUIT_SUCCESS
      console.log("经理审核通过")
    } else if (status === EnumAuditStatus.FINAL_ADUIT_SUCCESS) {
      console.log("财务审核通过")
    }
  }
}

const aduit = new MyAduit()
const expense: Expense = {
  id: 1,
  events: "购买商品",
  time: new Date(),
  enumAuditStatus: EnumAuditStatus.NO_ADUIT,
}
aduit.getAduitStatus(EnumAuditStatus.NO_ADUIT, expense)


// 'Expense' only refers to a type, but is being used as a value here.ts(2