// 为什么要用函数重载【好处和应用场景】
//一组具有相同名字，不同参数列表的和返回值无关并且具有一个实现签名和一个或多个重载签名的多个函数 。

type Message = {
  id: number
  type: MessageType
  sendmessage: string
}
enum MessageType {
  "Image" = "Image",
  "Audio" = "Audio",
}
let messages: Message[] = [
  {
    id: 1,
    type: MessageType.Image,
    sendmessage: "你好啊,今晚咱们一起去三里屯吧",
  },
  {
    id: 2,
    type: MessageType.Audio,
    sendmessage: "朝辞白帝彩云间，千里江陵一日还",
  },
  {
    id: 3,
    type: MessageType.Audio,
    sendmessage: "你好！张无忌",
  },
  {
    id: 4,
    type: MessageType.Audio,
    sendmessage: "刘老根苦练舞台绝技！",
  },
  {
    id: 5,
    type: MessageType.Image,
    sendmessage: "今晚王牌对王牌节目咋样?",
  },
]
function searchMsg(condition: MessageType): Message[] // 重载签名
function searchMsg(condition: number): Message | undefined
function searchMsg(condition: MessageType | number): Message | undefined | Message[] {
  //实现签名
  if (typeof condition === "number") {
    return messages.find((msg) => condition === msg.id)
  } else {
    return messages.filter((msg) => condition === msg.type)
  }
}
console.log(searchMsg(3))
searchMsg(MessageType.Audio).forEach((msg) => {
  console.log(msg)
})

export {}
