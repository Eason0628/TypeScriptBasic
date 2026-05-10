abstract class Animal {
  abstract eat();
  abstract fn();
  sleep() {
    console.log(1);
  }
}
abstract class Cat extends Animal {}

abstract class Mimi extends Cat {
  eat() {
    console.log("吃鱼");
  }
}
