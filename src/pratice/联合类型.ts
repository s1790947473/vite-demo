// 联合类型（Union Types）表示取值可以为多种类型中的一种。

let myFavoriteNumber: string | number
myFavoriteNumber = 'seven'
myFavoriteNumber = 7

// 访问联合类型的属性或方法
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
function getLength(something: string | number): number {
  return something.length // length不是string、number都共有属性
}

function getLength2(something: string | number): string {
  return something.toString()
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let myFavoriteNumber1: string | number
myFavoriteNumber1 = 'seven'
console.log(myFavoriteNumber1.length) // 5
myFavoriteNumber1 = 7
console.log(myFavoriteNumber1.length) // 编译时报错
// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.

// 3.交叉类型
// 创建新类型Student，继承Person，添加sex属性（也可以通过继承实现）
interface Person {
  name: string
  age: number
}
type Student = Person & {
  sex: string
}
const szw: Student = {
  name: 'szw',
  age: 18,
  sex: 'male'
}

// 4. 类型保护
// 联合类型需要在调用时进行类型保护，否则会报错，一般使用typeof、if等判断类型
function isNum(input: string | number): boolean {
  return typeof input === 'number'
}

// 不要使用any，会绕过类型检测
function getParamsLen(p: string | number | Array<unknown>): number {
  if (typeof p === 'number') {
    return 1
  } else if (typeof p === 'string') {
    return p.length
  } else if (Array.isArray(p)) {
    return p.length
  } else {
    return 0
  }
}

console.log(
  myFavoriteNumber,
  getLength(myFavoriteNumber),
  getLength2(myFavoriteNumber),
  myFavoriteNumber1,
  szw,
  isNum('s'),
  getParamsLen('szw')
)
