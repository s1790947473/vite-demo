const isDone: boolean = false
const createdElemenmt: boolean = new Boolean(1) // new构造函数创建的对象是包装的（对象），不是原始值
const createdByBoolean: boolean = Boolean(1) // 直接调用 Boolean 函数返回的是原始值（boolean）

// 数值类型
const decLiteral: number = 6
const hexLiteral: number = 0xf00d
// ES6 中的二进制表示法
const binaryLiteral: number = 0b1010
// ES6 中的八进制表示法
const octalLiteral: number = 0o744
const notANumber: number = NaN
const infinityNumber: number = Infinity

// 字符串类型
const myName: string = '张三'
const myAge: number = 18
const sentence: string = `我是${myName}，我今年${myAge}岁`

// 空值：void，使用 void 类型表示没有任何返回值的函数
function alertName(): void {
  alert('My name is Tom')
}
const unusable: void = undefined // 声明void 类型的变量没用，只能将它赋值为 undefined 和 null

// Null、undefined 类型，TS中可以直接定义这两个类型
const u: undefined = undefined

const n: null = null

// 这样不会报错。与void区别是，undefined 和 null 是所有类型的子类型。即undefined 类型的变量，可以赋值给 number 类型的变量：，
let num1: number = undefined
let u2: undefined
let num2: number = u2

// 任意值，（Any）用来表示允许赋值为任意类型，即在赋值过程中允许改变类型
let myFavoriteNumber: any = 'seven'
myFavoriteNumber = 7
// any上访问任何属性都是允许的
let anyThing: any = 'hello'
console.log(anyThing.myName)
console.log(anyThing.myName.firstName)
let something // 默认为any类型

// unknown 类型，与 any 类型类似，也允许赋值为任意类型，但是 unknown 类型只能赋值给 any 类型和 unknown 类型本身，不能赋值给其他类型
// 用类型断言，相当于告诉TypeScript编译器：“我知道这个对象有这些属性，请相信我。”然而，这种方法应该谨慎使用，因为它会绕过TypeScript的类型检查系统
function divide(param: unknown) {
  return (param as number) / 2
}
// unknown类型核心就是，不知道是什么类型，但他确实有值，与any区别：
// any：TS不会对any类型进行类型检查，也不会进行类型推断，因此any类型的变量可以赋值给任意类型的变量，也可以赋值给任意类型的函数参数。
// unknown：必须先证明或者收窄(type of、in、instance of)数据类型，才可以进行操作。
const x: unknown = 123
const a: any = x // ✅
const u1: unknown = x // ✅
// let n: number = x  // ❌ 不允许：没证明 x 是 number

// 常见场景：接收外部数据（接口返回、JSON.parse、表单）,多用unknown类型，少用any类型（因为他强迫写类型检查）
const data: unknown = JSON.parse('asd')
if (typeof data === 'object' && data !== null && 'name' in data) {
  console.log(data.name)
}

console.log(
  isDone,
  createdElemenmt,
  createdByBoolean,
  decLiteral,
  hexLiteral,
  binaryLiteral,
  octalLiteral,
  notANumber,
  infinityNumber,
  sentence,
  unusable,
  u,
  n,
  num1,
  num2,
  myFavoriteNumber,
  anyThing,
  something,
  divide(2)
)
