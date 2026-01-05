vue
<template>
  <!-- <el-container class="app-wrapper"> -->
  <!-- header -->
  <!-- <el-header class="header" text-red>
      <h1>Header</h1>
    </el-header>
    <div class="tag-view"></div> -->
  <!-- content -->
  <!-- <el-container class="main-content"> -->
  <!-- 左侧 -->
  <!-- <el-aside class="aside">左侧导航</el-aside> -->
  <!-- 主要显示区域 -->
  <!-- <el-container class="app-main">
        <router-view></router-view>
      </el-container>
    </el-container>
  </el-container> -->
  <!-- naive-ui -->
  <n-layout class="app-wrapper">
    <!-- header -->
    <n-layout-header class="header" style="height: 56px">
      <span>Header</span>
      <!-- <i class="iconfont icon-sousuolanshanchu"></i> -->
    </n-layout-header>
    <!-- tag-view -->
    <div class="tag-view" style="height: 34px">tags-view</div>
    <!-- 主要内容区域 -->
    <n-layout has-sider class="main-content">
      <!-- 左侧边栏 -->
      <n-layout-sider class="aside" collapse-mode="width" :width="240">
        <navbar></navbar>
      </n-layout-sider>
      <!-- 右侧内容区域 -->
      <n-layout-content class="app-main">
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import navbar from '@/components/dashboard/navbar.vue'
</script>

<style lang="scss" scoped>
// .app-wrapper {
//   height: 100%;
// }

.main-content {
  height: calc(100vh - 90px);
}
</style>
