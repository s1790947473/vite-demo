export default {
  useTabs: false,
  semi: false, // 不加分号（我个人习惯，你可以改成 true）
  singleQuote: true, // 用单引号
  printWidth: 100, // 一行最多 100 个字符
  trailingComma: 'none', // 对象最后一个属性后面不加逗号
  tabWidth: 2, // 缩进 2 格
  endOfLine: 'crlf', // windows一般是crlf
  // Vue 模板格式化关键配置
  vueIndentScriptAndStyle: false,
  vueSingleFileComponentIndentScriptAndStyle: false,

  // HTML/Vue 模板格式化
  htmlWhitespaceSensitivity: 'ignore',
  vueHtmlWhitespaceSensitivity: 'ignore',
  vueHtmlSelfClosingTags: 'always',

  // 属性换行配置
  vueHtmlMaxAttributes: 3, // 每行最多3个属性
  vueHtmlSingleline: 5, // 少于5个属性时保持单行
  vueHtmlAttributeWrap: 'auto', // 自动换行

  // 覆盖 Vue 文件的特定配置
  overrides: [
    {
      files: '*.vue',
      options: {
        parser: 'vue',
        printWidth: 100,
        vueIndentScriptAndStyle: false,
        vueHtmlMaxAttributes: 3,
        vueHtmlSingleline: 5
      }
    }
  ]
}
