//string number boolean undefined null symbol string[] number[] (()=>void)[] {}

type myObj = {
    name: string,
    age: number,
    hobby: string[],
    run: () => void
}

let obj: myObj = {
    name: "张三",
    age: 18,
    hobby: ["打篮球"],
    run: function() {
        console.log("run")
    }
}

type myNumber = number
let a: myNumber = 456