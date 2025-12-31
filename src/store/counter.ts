import { defineStore } from 'pinia'
import { ref } from 'vue' // 还是要写，虽然配置了自动导入，但是ts在编译时会检查是否有引入
export const useCounterStore = defineStore('counter', () => {
  // 1. 定义state，旧的选项式写法
  // state() {
  //   return {
  //     count: 0
  //   }
  // },
  // getters { }
  // vue3的setup函数
  const count = ref(0)
  // 2. 定义mutation
  const increment = () => {
    count.value++ // 访问包装对象的value属性来修改原值
  }
  // 导出
  return {
    count,
    increment
  }
})
