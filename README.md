1.指定目标版本
tsc index.ts --target es6

2.监听文件变化,自动编译
tsc index.ts -w

3.初始化tsconfig.json文件
tsc --init

4.直接运行TS文件,安装 ts-node，无需手动编译，直接执行TS
npm install -g ts-node
ts-node index_a.ts
