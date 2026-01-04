// 基础类型推论
// 1.未明确指定类型时，会根据类型推论规则来判断出类型
var myFavoriteNumber = 'seven'
// myFavoriteNumber = 7 不能将number分配给string类型
// 等价于
var myFavoriteNumber1 = 'seven'
// myFavoriteNumber1 = 7 myFavoriteNumber = 7 不能将number分配给string类型
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
var myFavoriteNumber2
myFavoriteNumber2 = 'seven'
myFavoriteNumber2 = 7
// 2.上下文类型推论
// 依据变量的使用上下文环境
function f1(num) {
  if (num === void 0) {
    num = 10
  }
  return num
}
