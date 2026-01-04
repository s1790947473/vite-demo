// @ts-nocheck
/* 
相同：
1. type与interface都可以定义对象、函数
2. type与interface都可以继承，type通过交叉类型&实现，interface通过extends实现
3. type还可以继承interface，interface还可以继承type

不同：
1. interface可以定义对象类型，对obj的形状进行描述
2. type是定义类型别名，方便编写代码
3. type可以声明基本类型、联合、交叉、元组
4. interface重复声明会合并属性，type重复声明会报错
 */

interface Person {
  name: string
  age: number
}

interface Person {
  sid: number
}
const szw: Person = {
  name: 'szw',
  age: 18,
  sid: 1001
}
