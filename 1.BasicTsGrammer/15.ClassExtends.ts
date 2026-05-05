class Animal {
  name: string;
  age: number;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log("我在吃饭");
  }
  sleep() {
    console.log("我在睡觉");
  }
}


class Dog extends Animal {
  gender: string;
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }
  //⽅法的重写
  eat() {
    console.log("我在吃⻣头");
  }
}
let wc = new Dog("旺财", 2, "boy");
wc.eat();


