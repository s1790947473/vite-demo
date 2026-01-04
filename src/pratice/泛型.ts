// 在定义函数、接口或类的时候，不预先指定具体的类型，先作为占位符，使用时候再指定类型
function createArray(length: number, value: unknown): Array<unknown> {
  const result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray(3, 'x') // ['x', 'x', 'x']
// 以上代码没有准确的定义返回值的类型，正常逻辑数组每一项都应该是输入的value的类型
// 1. 泛型函数，可以使用泛型约束来解决这个问题
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

// 泛型接口，实现接口更加灵活
interface KeyValuePair<T, U> {
  key: T
  value: U
}

const numberPair: KeyValuePair<number, string> = {
  key: 100,
  value: 'hundred'
}
console.log(numberPair)

// 泛型默认参数，
// 当调用函数时没有指定泛型参数，TS会自动推断类型
// 可以在定义接口或类时，为泛型参数指定默认类型
interface KeyValuePair<T = number, U = string> {
  key: T
  value: U
}

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
console.log(result)
// result: [string, number][] = [['hello', 42], ['hello', 42]]

// 3.3 条件类型：根据类型判断返回不同类型
type isString<T> = T extends string ? true : false
type I0 = isString<number> // false
type I1 = isString<'abc'> // true

// 定义实际变量
const myI0: I0 = false // ✅ 正确：I0类型是false
const myI1: I1 = true // ✅ 正确：I1类型是true
// ❌ 错误示例
// const errorI0: I0 = true;  // 编译错误：不能将true赋值给false类型
// const errorI1: I1 = false; // 编译错误：不能将false赋值给true类型
console.log(myI0, myI1)

// 3.4 映射类型，允许基于现有类型创建新类型，同时对新类型
type Person1 = {
  name: string
  age: number
  isStu: boolean
}
type keys = keyof Person1 // 'name' | 'age' | 'isStu'
type Stringfy<T> = {
  [P in keys]: string
}
type Person1Stringified = Stringfy<Person1>
const p: Person1Stringified = {
  name: 'Jack',
  age: '18',
  isStu: 'true'
}

// ⭐Partial操作符，将Partial<T>中的所有属性都设置为可选
type PartialP = Partial<Person1>
// { name?: string; age?: number; isStudent?: boolean;};
const p1: PartialP = {}

// ⭐Readonly操作符，将Readonly<T>中的所有属性都设置为只读
type ReadonlyP = Readonly<Person1>
// { readonly name: string; readonly age: number; readonly isStudent: boolean;}
const p2: ReadonlyP = {
  name: 'Jack',
  age: 18,
  isStu: true
}

console.log(p, p1, p2)
