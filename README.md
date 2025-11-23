2-2
TS 定义：融合了后端面向对象思想的超级版的 javaScript 语言。
环境搭建
npm install typescript -D 		安装在本地项目的 node_modules 里 
npm install -g typescript		全局安装 TypeScript
tsc --init 		tsc -v			项目中创建 TypeScript 配置文件 的命令，执行后，它会在当前目录下生成一个文件
优势:
优势 1: 编译时静态类型检测：函数或方法传参或变量赋值不匹配时，会出现编译错误提示，规避了开发期间的大量低级错误，省时，省力。
优势 2: 自动提示更清晰明确。
优势 3: 引入了泛型和一系列的 TS 特有的类型。
优势 4: 强大的 d.ts 声明文件：声明文件像一个书的目录一样，清晰直观展示了依赖库文件的接口，type 类型，类，函数，变量等声明。
优势 5: 轻松编译成 JS 文件：即使 TS 文件有错误，绝大多数情况也能编译出 JS 文件。
优势 6: 灵活性高：尽管 TS 是一门 强类型检查语言，但也提供了 any 类型和 as any 断言，这提供了 TS 的灵活度。

2-5
tsconfig.json
    "rootDir": "./2chapater/src",
    "outDir": "./2chapater/dist",

tsc 命令：编译 TS 文件，生成 JS 文件。
tsc 2-5.ts 命令：编译 2-5.ts 文件，生成 2-5.js 文件。
node 2-5.js 命令：运行 2-5.js 文件。

2-6
1.编译过程中发生错误则停止编译的命令
TypeScript 编译时默认会在检测到错误后继续编译（生成 .js 文件），若需遇到错误立即停止编译，需使用--noEmitOnError 选项
tsc 文件名.ts --noEmitOnError
# 示例：编译 index.ts，有错误则停止
tsc index.ts --noEmitOnError

全局生效（配置到 tsconfig.json，推荐）
{
  "compilerOptions": {
    "noEmitOnError": true  // 关键配置：错误时停止编译且不生成 JS
  }
}
2.编译后立即执行的命令
TypeScript 本身仅负责 “编译”（.ts → .js），无内置 “编译后自动执行” 功能，需结合工具链实现：
# 全局安装（任意项目可用）
npm install ts-node -g
# 项目内局部安装（推荐，避免全局依赖冲突）
npm install ts-node typescript --save-dev
执行ts-node 文件名.ts   命令：编译并执行 文件名.ts 文件，无需手动运行 .js 文件。


2-7 常用的24种TS类型
基本类型:number, string, boolean, symbol, null, undefined
根类型:Object, {}
对象类型:Array, object, function
枚举:enum
其他特殊类型:any, unknown, never, void, 元组（tuple）
可变元组合成类型:联合类型，交叉类型

2-13 any，unknown 的两点区别和应用场景
any 和 unknown 在开发中和第三方包源码底层经常看到，弄清楚它们的区别很重要。
相同点: any 和 unknown 可以是任何类的父类，所以任何类型的变量都可以赋值给any 类型或 unknown 类型的变量。
不同点 1: any 也可以是任何类的子类，但 unknown 不可以，所以 any 类型的变量都可以赋值给其他类型的变量。
不同点 2: 不能拿 unknown 类型的变量来获取任何属性和方法，但 any 类型的变量可以获取任意名称的属性和任意名称的方法。
any 比较典型的应用场景: 1. 自定义守卫 2. 需要进行 as any 类型断言的场景
