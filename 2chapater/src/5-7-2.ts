function cal(num: string | number) {
  if (isNum(num)) {
    num + 2
  } else {
    num + 10
  }
}

function isNum(num: any): num is number {
  return typeof num === "number"
}
export {}
