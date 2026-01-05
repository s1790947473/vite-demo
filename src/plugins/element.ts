import type { App } from 'vue'
import { ElMessage, ElNotification, ElMessageBox } from 'element-plus'
// 插件化写法，也可以如此引入其他插件
export default (app: App) => {
  // 将Element Plus方法挂载到全局属性
  app.config.globalProperties.$message = ElMessage
  app.config.globalProperties.$notify = ElNotification
  app.config.globalProperties.$confirm = ElMessageBox.confirm
  app.config.globalProperties.$alert = ElMessageBox.alert
  app.config.globalProperties.$prompt = ElMessageBox.prompt
}
