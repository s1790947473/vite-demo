// 枚举相当于常量组合，类似JS中常export的常量JS文件，每个成员都是enum定义的类型，传值时传入具体的成员名
// 1.基本枚举
// 默认情况下，枚举成员的数值从 0 开始递增，
enum Color {
  Red,
  Green,
  Blue
}
const c: Color = Color.Green
console.log(c) //0

// 2.手动赋值
enum Color1 {
  Red = 1,
  Green,
  Blue
}

// 3.字符串枚举
// 每个成员都必须被赋予一个字符串字面量值，或者通过其他已赋值的字符串枚举成员来计
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
const direction: Direction = Direction.Up

// 4.使用实例
enum E {
  A,
  B
}
function f(x: E): void {
  console.log(x)
}
f(E.A)
// f(99) ❌️，因为99不是E的成员

// 5.反向映射(只支持数值枚举)
// 即从值到枚举成员的映射，可以通过枚举值来查找对应枚举成员
enum V {
  A = 1,
  B = 2,
  C = 3
}
console.log('反向映射：V.A对应的枚举成员是：', V[1]) // V.A

// 5.1 双向映射
enum D1 {
  // 正向
  A = 'a',
  B = 'b',
  C = 'c',
  // 反向
  a = 'A',
  b = 'B',
  c = 'C'
}
console.log('双向映射：D1.A对应的枚举成员是：', D1['A']) // D1.A
console.log('双向映射：D1.a对应的枚举成员是：', D1['a']) // D1.a
