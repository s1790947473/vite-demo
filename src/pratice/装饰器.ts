/* 
装饰器是一种特殊声明，可以附加到类、方法、访问器、属性或参数上，允许你在编译时修改类的行为或添加元数据。
TS中的装饰器功能主要用于元编程，可以帮助简化代码，增强可重用性。
装饰器的使用需在 tsconfig.json 中启用 experimentalDecorators：
*/
// 按照如下配置
const x = {
  compilerOptions: {
    experimentalDecorators: true
  }
}
console.log(x)

// 1. 类装饰器，类装饰器应用于类的定义，可以用来修改类或替换类的构造函数。
function ClassDecorator(constructor: Function) {
  console.log('ClassDecorator called')
}

@ClassDecorator
class MyClass {
  constructor() {}
}

// 2. 方法装饰器，方法装饰器应用于方法的定义，可以用来修改方法的行为或添加元数据。
function MethodDecorator(
  target: object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log('MethodDecorator called on:', propertyKey, descriptor)
  // 可以修改 descriptor.value 来替换方法实现
}

class MyClass1 {
  @MethodDecorator
  myMethod() {
    console.log('Original method')
  }
}

// 3. 访问器装饰器
function AccessorDecorator(
  target: object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log('AccessorDecorator called on:', propertyKey, descriptor)
}

class MyClass2 {
  private _value: string = 'test'

  @AccessorDecorator
  get value() {
    return this._value
  }

  set value(newValue: string) {
    this._value = newValue
  }
}

// 4. 属性装饰器，用于装饰类的属性，但不会直接改变属性的值或行为
function PropertyDecorator(target: object, propertyKey: string | symbol) {
  console.log('PropertyDecorator called on:', propertyKey)
}

class MyClass3 {
  @PropertyDecorator
  myProperty: string
}

// 5. 参数装饰器，用于装饰方法的参数，但不会直接改变参数的值或行为
function ParameterDecorator(target: object, propertyKey: string | symbol, parameterIndex: number) {
  console.log('ParameterDecorator called on:', propertyKey, 'at parameter index:', parameterIndex)
}

class MyClass4 {
  myMethod(@ParameterDecorator param: string) {
    console.log(param)
  }
}

// 6. 实际应用示例
function Log(target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${String(propertyKey)} with arguments`, args)
    const result = originalMethod.apply(this, args)
    console.log(`Result of ${String(propertyKey)}:`, result)
    return result
  }
}

class MyClass5 {
  @Log
  sum(a: number, b: number) {
    return a + b
  }
}

const myClass = new MyClass()
myClass.sum(2, 3)
