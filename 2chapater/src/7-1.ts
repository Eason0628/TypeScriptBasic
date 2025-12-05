// 为什么要用函数重载【好处和应用场景】
export type Message = {
  id: number
  type: MessageType
  sendmessage: string
}
enum MessageType {
  "Image" = 1,
  "Audio" = 2,
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

function searchMsg(condition: MessageType | number): Message | undefined | Message[] {
  console.log("condition:", condition)
  if (typeof condition === "number") {
    return messages.find((msg) => condition === msg.id)
  } else {
    return messages.filter((msg) => condition === msg.type)
  }
}
// (searchMsg(1) as Message).id

searchMsg(MessageType.Image)
