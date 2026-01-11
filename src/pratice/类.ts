// @ts-nocheck
// 1. 面向对象特性
class Person {
  name: string // 属性必须先声明才能使用
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
// private：私有属性，只能在类的内部访问 #name='szw
// protected：受保护的属性，只能在类的内部和子类中访问
// static：静态属性，直接通过类访问，不需要实例化
// readonly：只读属性，只能在创建时赋值，后续不允许修改

// 3. 抽象类


// 4.继承
// 子类重写父类方法时,要保证重写后的方法兼容super方法
// super,原型方法指向实例,构造函数和静态方法则指向父类
class Parent {
  name: string = "Parent";

  greet() {
    // 这里的 this 会被动态绑定
    console.log(`Hello, I am ${this.name}`);
  }
}

class Child extends Parent {
  name: string = "Child";

  sayHello() {
    // 调用父类的 greet 方法
    // super 在这里相当于 "带着子类的 this 去执行父类的逻辑"
    super.greet();
  }
  static staticSayHello() {
    // 这里的 super 指向 Parent 类（构造函数）
    // 注意：静态方法中的 this 指向当前类（Child），super 指向父类
    super.staticGreet();
  }
}


const child = new Child();
child.sayHello();