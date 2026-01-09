<template>
  <div>
    <h1>formDemo</h1>
  </div>
  <hr />
  <!-- model默认绑定自定义组件的value，显式指定属性名value，参数化写法, -->
  <n-radio-group v-model:value="size">
    <n-radio value="medium">中</n-radio>
    <n-radio value="small">小</n-radio>
    <n-radio value="large">大</n-radio>
  </n-radio-group>
  <!-- v-model多参数绑定 -->
  <n-form
    ref="formRef"
    inline
    :label-width="100"
    :rules="rules"
    v-model:value="formData"
    :size="size"
  >
    <n-form-item label="用户名" path="username">
      <n-input v-model:value="formData.username" />
    </n-form-item>
    <n-form-item label="密码" path="password">
      <n-input v-model:value="formData.password" type="password" />
    </n-form-item>
    <n-form-item label="记住我" path="rememberMe">
      <n-checkbox v-model:checked="formData.rememberMe" />
    </n-form-item>
    <n-button attr-type="button" @click="handleValidateClick">验证</n-button>
  </n-form>
  <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
  <hr />
  <router-view></router-view>
</template>
<script setup lang="ts">
import type { FormInst } from 'naive-ui'
// vue3 默认绑定是  :modelValue="size"   @update:modelValue="size = $event"
// 单参数绑定，naive默认还是绑定到value上，所以要使用v-model:value="size"显式绑定属性名size，
const size = ref<'medium' | 'small' | 'large'>('medium')
// 多参数绑定
//
const formData = reactive({
  username: '',
  password: '',
  rememberMe: false
})

// form的验证rule，与path对应，类似element的prop
const rules = {
  username: [
    {
      required: true,
      message: '请输入年龄',
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: '请输入电话号码',
      trigger: ['input']
    }
  ]
}

// 获取表单实例
const formRef = ref<FormInst | null>(null)
function handleValidateClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate().then((valid) => {
    if (valid) {
      console.log('验证通过')
    } else {
      console.log('验证失败')
    }
  })
}
// path属性，关联rules的验证规则
</script>
<style scoped></style>
