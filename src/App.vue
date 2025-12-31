<template>
  <RouterLink to="/">首页</RouterLink>
  <RouterLink to="/about">关于</RouterLink>
  <el-button @click="counterStore.increment">增加</el-button>
  : {{ counterStore.count }}
  <router-view />
</template>

<script setup lang="ts">
// setup 语法糖
// export default {
//   setup() {
//     }
//   }
import { useCounterStore } from '@/store/counter'
const counterStore = useCounterStore() // 直接获取store变量，不要解构，会丢失响应性
</script>

<style scoped></style>
