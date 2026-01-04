vue
<template>
  <el-container class="app-wrapper">
    <!-- header -->
    <el-header class="header">
      <h1>Header</h1>
    </el-header>
    <div class="tag-view"></div>
    <!-- content -->
    <el-container class="content">
      <!-- 左侧 -->
      <el-aside class="aside">左侧导航</el-aside>
      <!-- 主要显示区域 -->
      <el-container class="app-main">
        <router-view></router-view>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts"></script>

<style scoped></style>
