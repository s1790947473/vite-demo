// 数组定义方式很灵活
const num_list: (number | string | boolean)[] = [1, 2, 3]
//或另一种写法，泛型约束数组（后面细讲）
const num_list2: Array<number> = [1, 2, 3]
num_list2.push(4) // 可以调用数组上的方法

// 元组2,(长度严格一致)
const tuple: [number, string, boolean] = [18, 'lin', true] // 必须一一对应
tuple.push(100)
tuple[4] = 'sss' // 会提示编译时类型检查错误，但是运行时数据正确
tuple.push(false)
// 元组3,(长度可以不一致)
const tuple2: [number, string, boolean?] = [18, 'lin', true]
const tuple3: [number, string, ...unknown[]] = [18, 'lin', true, 100, 'sss', false]
const tuple4: [number, string, ...(boolean | number | string)[]] = [
  18,
  'lin',
  true,
  100,
  'sss',
  false
]

console.log(num_list, num_list2, tuple)
