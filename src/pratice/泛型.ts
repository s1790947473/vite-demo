// 在定义函数、接口或类的时候，不预先指定具体的类型，使用时候再指定类型
function createArray(length: number, value: unknown): Array<unknown> {
  const result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray(3, 'x') // ['x', 'x', 'x']
// 以上代码没有准确的定义返回值的类型，正常逻辑数组每一项都应该是输入的value的类型
// 可以使用泛型约束来解决这个问题
function createArray2<T>(length: number, value: T): Array<T> {
  const result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
// 1. 用<T>来指代任意输入类型
createArray2(3, 'x') // ['x', 'x', 'x']
// 2. 在调用的时候可以主动指定具体类型，或者自动类型推论
createArray2<string>(3, 'x') // ['x', 'x', 'x']

// 多类型参数，（交换参数），传入tuple形式，将值swap，
// <T, U>表示函数参数的类型分别是泛型T与U
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
swap([7, 'seven']) // ['seven', 7]
// 如果不使用泛型的话：function swap(tuple: [unknown, unknown]): [unknown, unknown]，这样会造成返回值类型丢失，泛型能让TS保留并带回具体类型，实现输入什么类型，输出就精确反应交换后的类型

// 泛型约束，如果是泛型变量，不确定属性是否存在时，不能随意操作它的属性
interface Lengthwise {
  length: number
}
function loggingIdentity<T>(arg: T): T {
  // console.log(arg.length) // 报错，因为T类型不确定是否有length属性
  return arg
}
// 通过泛型约束，T必须符合接口Lengthwise的shape，确保T类型有length属性
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
loggingIdentity('hello') // hello
loggingIdentity2({ length: 10, value: 3 })

// 多个类型参数之间也可以互相约束：
function copyFields<T extends U, U>(target: T, source: U): T {
  for (const id in source) {
    // target[id] = (<T>source)[id] // 启用 “erasableSyntaxOnly” 时，不允许使用此语法。
    target[id] = (source as T)[id]
  }
  return target
}

const x = { a: 1, b: 2, c: 3, d: 4 }
copyFields(x, { b: 10, d: 20 })

// 2. 泛型例子
// 一个函数可以处理多种类型
function processValue<T>(value: T): T {
  // 这里可以根据具体类型进行不同的处理
  return value
}

// 使用：同一个函数可以处理任意类型
processValue<number>(10) // ✅ 指定为number类型
processValue<string>('hello') // ✅ 指定为string类型
processValue<boolean>(true) // ✅ 指定为boolean类型
processValue<{ name: string }>({ name: 'Alice' }) // ✅ 指定为对象类型

// 3. 高级泛型应用
// 3.1 泛型约束：要求T必须具有length属性
function createArrayWithLength<T extends { length: number }>(length: number, value: T): T[] {
  const result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

// ✅ 可以处理有length属性的类型
createArrayWithLength(2, 'hi') // string有length
createArrayWithLength(2, [1, 2]) // 数组有length
// createArrayWithLength(2, 123)   // ❌ 数字没有length

// 3.2 多个泛型参数
function createMultiArray<T, U>(length: number, value1: T, value2: U): [T, U][] {
  const result: [T, U][] = []
  for (let i = 0; i < length; i++) {
    result[i] = [value1, value2]
  }
  return result
}

const result = createMultiArray(2, 'hello', 42)
// result: [string, number][] = [['hello', 42], ['hello', 42]]
