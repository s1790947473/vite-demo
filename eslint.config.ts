import js from '@eslint/js' // 检验js规范
import globals from 'globals'
import tseslint from 'typescript-eslint' // ts规范
import pluginVue from 'eslint-plugin-vue' // vue的规范
import { defineConfig } from 'eslint/config'
import prettierRecommended from 'eslint-plugin-prettier/recommended' // 将prettier的格式化结果作为eslint警告输出
// 加载json的三种方式：1.with 2.创建require 3.fs.readFile
// import autoImport from './.eslintrc-auto-import.json' with { type: 'json' } // eslint中配置自动导入，json文件要通过with导入，但是不推荐这种写法
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const autoImport = require('./.eslintrc-auto-import.json') // 推荐这种导入语法

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...autoImport.globals
      }
    }
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'], // 校验vue中的ts代码
    languageOptions: {
      parserOptions: { parser: tseslint.parser }
    }
  },
  {
    // 不配置eslint检查的文件
    ignores: ['src/pratice/**/*']
  },
  {
    // 配置eslint的一些规则，eslint应该只负责语法检查，不管格式化问题
    rules: {
      'no-console': ['warn', { allow: ['log', 'warn', 'error'] }],
      semi: ['error', 'never'],
      // 'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off' // 允许单词组件名
      // '@typescript-eslint/no-explicit-any': 'warn', // any 类型警告
      // '@typescript-eslint/no-unused-vars': 'error' // 未使用变量报错
      // "vue/script-setup-uses-vars": "error"
    }
  },
  prettierRecommended // 覆盖eslint的规范，主要做格式化
  // ignorePatterns: ['src/pratice/**/*', 'dist/**/*']
])
