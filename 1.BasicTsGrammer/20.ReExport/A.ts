export type{Person} from "../19.InterfaceModularization/C"
export * from "../19.InterfaceModularization/C" //重导出所有

// 重导出的作⽤就是，当你的⽂件中需要⽤到好多模块定义的类型，那么可以单独定义⼀个⽂件，把这些模板进⾏重
// 导出，那么我们的项⽬⽂件只需要引⼊这⼀个重导出⽂件就可以了
