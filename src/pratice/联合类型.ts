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

console.log(
  myFavoriteNumber,
  getLength(myFavoriteNumber),
  getLength2(myFavoriteNumber),
  myFavoriteNumber1
)
