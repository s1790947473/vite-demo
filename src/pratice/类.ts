// 1. 面向对象特性
class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

const p = new Person('szw')
p.sayHello()

class Man extends Person {
  age: number
  constructor(name: string, age: number) {
    super(name)
    this.age = age
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`)
  }
}
const m = new Man('szw', 25)
m.sayHello()

// 2. 修饰符public、private、protected
// public：默认修饰符，公开的，任何地方都可以访问
// private：私有属性，只能在类的内部访问
// protected：受保护的属性，只能在类的内部和子类中访问
// static：静态属性，直接通过类访问，不需要实例化
// readonly：只读属性，只能在创建时赋值，后续不允许修改

// 3. 抽象类
