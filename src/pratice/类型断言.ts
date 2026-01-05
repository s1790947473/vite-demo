// @ts-nocheck
// 类型断言用于手动指定值的类型
// 写法1：值 as类型，推荐
// 写法2：<类型>值

// 1.将联合类型断言为其中具体类型
interface Cat {
  name: string
  run(): void
}
interface Fish {
  name: string
  swim(): void
}

function isFish(animal: Cat | Fish) {
  // if (typeof animal.swim === 'function') 会报错
  if (typeof (animal as Fish).swim === 'function') {
    return true
  }
  return false
}

// 2. 父类断言为具体子类
// 通过判断是否存在code属性，来判断传入参数是否是ApiError类型
interface ApiError extends Error {
  code: number
}
interface HttpError extends Error {
  statusCode: number
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === 'number') {
    return true
  }
  return false
}

// 3. 断言的兼容性
interface Animal {
  name: string
}
interface Cat {
  name: string
  run(): void
}

let tom: Cat = {
  name: 'Tom',
  run: () => {
    console.log('run')
  }
}
let animal: Animal = tom
// TypeScript 是结构类型系统，类型之间的对比只会比较它们最终的结构，而会忽略它们定义时的关系，所以可以认为Cat extends Animal
// 所以两者可以互相断言

// 4. 类型断言与类型声明的区别
// 断言只是兼容类型，不会真的改变类型
interface Animal {
  name: string
}
interface Cat {
  name: string
  run(): void
}

const animal: Animal = {
  name: 'tom'
}
let tom: Cat = animal
// animal 断言为 Cat，只需要满足 Animal 兼容 Cat 或 Cat 兼容 Animal 即可
// animal 赋值给 tom，需要满足 Cat 兼容 Animal 才行

// 5. 结合泛型
function getCacheData<T>(key: string): T {
  return (window as any).cache[key]
}

interface Cat {
  name: string
  run(): void
}

const tom = getCacheData<Cat>('tom')
tom.run()
// getCacheData 函数添加了一个泛型 <T>，可以更规范的实现对 getCacheData 返回值的约束，同时去除了代码中的 any，最优的解决方案
