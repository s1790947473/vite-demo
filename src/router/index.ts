import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router' // 接口类型导入
import layout from '@/layout/index.vue'
// 路由使用非哈希模式，因为哈希模式无法做SEO
const routes: RouteRecordRaw[] = [
  // 导入布局组件
  {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: import('@/views/dashboard/index.vue') // 主要路由，同步加载
      }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
