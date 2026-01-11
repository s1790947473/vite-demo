// 函数约束
// 未明确函数返回值类型，默认为void
// 1.函数声明
function sum(x: number, y: number): number {
  return x + y
}
sum(1, 2)

// 2.函数表达式，写法
// 这是对等号右侧的匿名函数进行类型定义，通过类型推论来推断变量sum1的类型，
const sum1 = (params1: number, params2: number) => {
  return params1 + params2
}
// ....编译后的JS代码
const sum2 = function (params1, params2) {
  return params1 + params2
}
// 约束后的函数表达式
// 此处直接对变量sum4也进行了类型定义，最标准的函数表达式写法
const sum4: (params1: number, params2: string) => string = (a: number, b: string): string => {
  return a + b
}
// .....编译后JS代码
const sum5 = function (a, b) {
  return a + b
}
// 这种写法看着很长，但是将函数赋值给变量的方法更好，可以如下简写
type isSum = (x: string, y: string) => string
const sum41: isSum = (a, b) => {
  return a + b
}


// 3. 主要应用场景
// 3.1 函数作为参数
function processNumbers(callback: (num1: number, num2: string) => string) {
  return callback(10, ' processed')
}
processNumbers(sum4) // 可以传入sum4

// 3.2 接口定义
// 定义一个接口，描述函数的类型
interface MathOperation {
  (a: number, b: number): number
}
const sum6: MathOperation = (a, b) => a + b

// 3.3 类型复用（API请求函数、表单验证器、事件处理器等）
type StringConverter = (num: number, text: string) => string

const sum7: StringConverter = (a, b) => a + b
const formatCurrency: StringConverter = (amount, currency) => `${currency}${amount}`
// 3.4 类型复用（实践好用、多用）
/**
 * 将数字和文本转换为字符串的转换器类型
 * @param num - 要转换的数字
 * @param text - 要转换的文本
 * @returns 组合后的字符串
 */
type StringConverter1 = (num: number, text: string) => string

// 4. 可选参数，与对象的可选参数类似
// 可选参数要先判断是否存在，再进行操作，并且要在必选参数之后，ES6会将默认参数自动作为可选参数，就不用限制放在参数列表末尾了
function sum11(x: number, y?: number) {
  if (y) return x + y
  return x
}
// ...编译后的JS代码
function sum12(x, y) {
  if (y) return x + y
  return x
}
// 5. 默认参数（应该放在参数列表末尾）
// 如果默认参数不是最后一个参数，则需要传入undefined来获得默认值
function addd(x: number = 100, y: number): number {
  return x + y
}
// addd(1) 应有 2 个参数，但获得 1 个
// addd(undefined, 5) // 结果：105 (100 + 5)

// 6. 3种函数类型定义方法
// 6.1 类型别名，针对箭头语法
type AddFunction = (x: number, y: number) => number
// 6.2 接口的函数属性，作为对象属性
interface ButtonProps {
  onClick?: (event: MouseEvent) => void
}
// 6.3 函数接口，描述可调用对象的接口，接口本身可以调用
interface DataProcessor {
  (data: string, options: { uppercase?: boolean }): string
}
// 实现函数接口
const processor: DataProcessor = (data, options) => {
  return options?.uppercase ? data.toUpperCase() : data
}
// 直接调用
processor('hello', { uppercase: true })



// 7. 函数重载
// ts的函数重载是类型重载，不是功能重载
// 写法上必须连续，不能隔行
function toArray(value: number): number[]
function toArray(value: string): string[]
function toArray(value:number | string): string[] |number[] {
  if (typeof value === 'string') {
    return value.split('')
  }
  return value.toString().split('').map(Number)
}

console.log(
  sum1(1, 2),
  sum2(1, 2),
  sum4(1, '2'),
  sum5(1, '2'),
  sum6(1, 2),
  sum7(1, '2'),
  formatCurrency(1000, '$'),
  sum11(1, 2),
  sum12(1, 2)
)
