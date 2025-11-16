// 什么场景never 可以被推到出来而不被定义？
// dataFlowAnalysisWithNever 方法穷尽了 DataFlow 的所有可能类型。 
// 使用 never 避免出现未来扩展新的类没有对应类型的实现, 目的就是写出类型绝对安全的代码。
type DataFlow = string | number 
function dataFlowAnalysisWithNever(dataFlow: DataFlow) {
 
  if (typeof dataFlow === "string") {
    console.log("字符串类型:", dataFlow.length);
  } else if (typeof dataFlow === "number") {
    console.log("数值类型:", dataFlow.toFixed(2));
  }else{
    // 这里data的类型就是never 
    // 如果type DataFlow = string | number | boolean ,那么这里的类型默认被推到成boolean
    // 像现在这样联合类型被穷尽，data的类型就默认别推导成never，避免出现未来扩展新的类没有对应类型的实现, 目的就是写出类型绝对安全的代码。
    let data=dataFlow
  }
}
dataFlowAnalysisWithNever("免税店")
dataFlowAnalysisWithNever(3.199923)
