import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css' // 导入对应样式
import 'uno.css' // 导入 UnoCSS 样式
import '@/styles/tap/common.scss' // vite中要使用ES module语法,sass新版建议用@use，import废弃，需要配置vite.config.ts屏蔽警告

const pinia = createPinia()
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
