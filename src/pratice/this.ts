// this用法
const person = {
    name: 'szw',
    age: 28
}
// 函数的第一个参数this是伪参数，用来传递上下文环境，使用该参数时，要显式绑定this，即通过call、apply等调用函数
// 显示绑定this
// ts中this类型需要手动指定，默认也是第一个参数
function getValue(this: typeof person, key: keyof typeof person) {
    return this[key]
}
getValue.call(person, "name") // 调用call，传递给函数指定的this环境为perosn，即this=person
// 如果不想显式调用call，可以把getValue函数定义在perosn内部，这样this就自动指向person
type IThis = typeof person // 加这个方便