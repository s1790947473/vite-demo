import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' //导入 node.js path
import AutoImport from 'unplugin-auto-import/vite' // 模块 / 工具函数自动化导入,避免重复编写 import 语句。
import Components from 'unplugin-vue-components/vite' // 组件自动化导入
import UnoCSS from 'unocss/vite' // 导入 UnoCSS 插件
import ElementPlus from 'unplugin-element-plus/vite' // 手动导入
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({}),
    UnoCSS({
      configFile: './uno.config.ts' // 配置文件路径
    }),
    // 自动导入 Vue API
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        { 'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'] }
      ],
      resolvers: [NaiveUiResolver()], // ElementPlusResolver()
      // 自定义导入的目录，如工具函数（默认src/components）
      dirs: ['src/utils/**'],
      eslintrc: {
        enabled: false // 首次开启即可， eslint 自动导入,否则自动导入es不识别，true会生成es-auto-imports.json文件
      },
      dts: 'src/auto-imports.d.ts' // 生成类型声明文件
    }),
    // 自动导入组件
    Components({
      // 解析组件
      resolvers: [NaiveUiResolver()], // ElementPlusResolver()
      // 所有组件可以自动加载
      dirs: ['src/components'],
      dts: 'src/components.d.ts', // 生成类型声明文件
      types: [
        {
          from: 'naive-ui',
          names: ['NLayout', 'NLayoutHeader', 'NLayoutContent', 'NLayoutSider', 'NButton', 'NInput']
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 配置路径别名
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 屏蔽 'import' 相关的弃用警告
        // 也可以加上 'legacy-js-api' 以防万一
        silenceDeprecations: ['import', 'legacy-js-api']
      }
    }
  },
  // 服务器配置
  server: {
    watch: {
      usePolling: true // 解决开发环境下文件变化不及时的问题，轮训模式
    }
    // port: 3000, // 我习惯用 3000 端口，你随意
    // open: true, // 启动自动打开浏览器，省得手动打开
    // cors: true, // 允许跨域
    // // 代理配置（解决开发环境跨域问题）
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8080', // 后端服务地址
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  }
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
