vue
<template>
  <el-container class="app-wrapper">
    <!-- header -->
    <el-header class="header" text-red>
      <h1>Header</h1>
    </el-header>
    <div class="tag-view"></div>
    <!-- content -->
    <el-container class="main-content">
      <!-- 左侧 -->
      <el-aside class="aside">左侧导航</el-aside>
      <!-- 主要显示区域 -->
      <el-container class="app-main">
        <router-view></router-view>
      </el-container>
    </el-container>
  </el-container>
  <!-- <div class="app-wrapper">
    <div class="sidebar-container">侧边导航</div>
    <div class="main-container">
      <div class="header">
        <div class="navbar">导航条-1</div>
        <div class="tags-view">导航条-2</div>
      </div>
      <div class="app-main">
        <router-view></router-view>
      </div>
    </div>
  </div> -->
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
