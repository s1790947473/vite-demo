// @ts-nocheck
// 1. Exclude<T, U>：从类型T中排除可以赋值给类型U的所有属性，返回剩余属性的类型。
type T1 = string | number | boolean
type T2 = Exclude<T1, number | boolean> // T2 的类型是 string
// 原理，借助了条件类型
type Exclude<T, U> = T extends U ? never : T

// 2. Extract<T, U>：提取类型T中可以赋值给类型U的所有属性，返回这些属性的类型。
type T11 = string | number | boolean
type T22 = Extract<T1, string | boolean> // T2 的类型是 string | boolean
// 原理，借助了条件类型
type Extract<T, U> = T extends U ? T : never

// 3. NonNullable<T>：从类型T中排除null和undefined，返回剩余属性的类型。
type T111 = string | null | undefined
type T222 = NonNullable<T1> // T2 的类型是 string

// 4. Parameters<T>：获取函数类型T的参数类型，返回一个元组类型。
function foo(a: number, b: string): boolean {
  return a > 0 && b.length > 0
}

type T1111 = Parameters<typeof foo> // T1 的类型是 [a: number, b: string]
// 5. ReturnType<T>：获取函数类型T的返回类型。
function bar(): string {
  return 'hello'
}

type T11111 = ReturnType<typeof bar> // T1 的类型是 string
// 6. Omit<T, U>从类型 T 中剔除 U 中的所有属性。
interface IPerson {
  name: string
  age: number
}

type IOmit = Omit<IPerson, 'age'> // name: string
