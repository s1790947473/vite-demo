<template>
  <n-layout>
    <!-- <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="false"
      :show-trigger="false"
      @collapse="collapsed = true"
      @expand="collapsed = false"
    > -->
    <n-menu
      :options="menuOptions"
      :collapsed="false"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :value="activeKey"
      @update:value="handleMenuUpdate"
    />
    <!-- </n-layout-sider> -->
  </n-layout>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { menuOptions } from './menu'

const route = useRoute()
const router = useRouter()

// 高亮跟随当前路由
const activeKey = computed(() => route.path)

function handleMenuUpdate(key: string) {
  // 只处理以 / 开头的“页面菜单”，像分组 key=lab 这种不跳转
  if (key.startsWith('/')) router.push(key)
}
</script>
