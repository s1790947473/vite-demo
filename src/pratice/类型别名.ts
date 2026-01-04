// 类型别名
// 可以为类型起一个新的名字，方便使用
type name = string
const szw: name = 'szw'

type arrItem = number | string | boolean
function f1(item: arrItem): void {
  console.log(item)
}
f1(szw)

type Person = {
  name: string
  age: number
}
type stu = Person & { sid: number }
type teacher = Person & { tid: number }
// 1.1 (stu & teacher)[] 表示类型交叉，则sid、tid都必须存在
// 1.2 (stu | teacher)[] 表示类型并集，则sid、tid其中一个存在即可
const males: (stu | teacher)[] = [
  {
    name: 'szw',
    age: 18,
    sid: 1001,
    tid: 3001
  },
  {
    name: 'lin',
    age: 19,
    tid: 2001,
    sid: 1002
  }
]

// 1.3 创建更通用的类型
type Person2 = Person & {
  sid?: number
  tid?: number
}
const males2: Person2[] = [
  {
    name: 'szw',
    age: 18,
    sid: 1001
  },
  {
    name: 'lin',
    age: 19,
    tid: 2001
  }
]

console.log({ szw, males, males2 })
