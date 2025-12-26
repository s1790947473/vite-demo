import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' //导入 node.js path
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动导入 Vue API
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts' // 生成类型声明文件
    }),
    // 自动导入组件
    Components({
      resolvers: [ElementPlusResolver()],
      dts: 'src/components.d.ts' // 生成类型声明文件
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 配置路径别名
    }
  }
  // 服务器配置
  // server: {
  //   port: 3000,        // 我习惯用 3000 端口，你随意
  //   open: true,        // 启动自动打开浏览器，省得手动打开
  //   cors: true,           // 允许跨域

  //   // 代理配置（解决开发环境跨域问题）
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8080',  // 后端服务地址
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  // 构建配置
  // build: {
  //   outDir: 'dist',                    // 输出目录
  //   sourcemap: false,                  // 不生成 sourcemap
  //   minify: 'terser',                  // 使用 terser 压缩
  //   chunkSizeWarningLimit: 1500,       // chunk 大小警告的限制

  //   rollupOptions: {
  //     output: {
  //       // 分包策略
  //       manualChunks: {
  //         'vue-vendor': ['vue', 'vue-router', 'pinia'],
  //         'element-plus': ['element-plus'],
  //       }
  //     }
  //   }
  // }
})
