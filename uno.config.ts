// uno.config.ts

// ❌ 错误：不要这样混着引
// import { defineConfig } from 'unocss'
// import presetAttributify from '@unocss/preset-attributify'
// import presetUno from '@unocss/preset-uno'
// import transformerDirectives from '@unocss/transformer-directives'

// ✅ 正确：全部从 'unocss' 主包引入
import { defineConfig, presetAttributify, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [presetAttributify(), presetUno()],
  transformers: [transformerDirectives()]
})
