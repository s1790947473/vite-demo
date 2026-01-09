<template>
  <div>
    <h1>layoutDemo - Key 属性测试</h1>

    <!-- 测试1：使用 v-model（可能看起来正常） -->
    <div style="border: 1px solid #ccc; padding: 10px; margin: 10px">
      <h3>测试1：使用 v-model（响应式数据）</h3>
      <div v-for="item in items1">
        <input v-model="item.text" placeholder="输入内容" />
        <span>- {{ item.name }}</span>
      </div>
      <button @click="reverseItems1($event)">反转列表1</button>
    </div>

    <!-- 测试2：使用原生 DOM 操作（真正展示问题） -->
    <div style="border: 1px solid #ccc; padding: 10px; margin: 10px">
      <h3>测试2：使用原生 input.value（没有 key）</h3>
      <div v-for="(item, index) in items2">
        <input :ref="(el) => setInputRef(index, el)" placeholder="输入内容" />
        <span>- {{ item.name }}</span>
      </div>
      <button @click="reverseItems2">反转列表2</button>
    </div>

    <!-- 测试3：使用 key 的正确方案 -->
    <div style="border: 1px solid #ccc; padding: 10px; margin: 10px">
      <h3>测试3：使用 key 属性</h3>
      <div v-for="item in items3" :key="item.id">
        <input v-model="item.text" placeholder="输入内容" />
        <span>- {{ item.name }}</span>
      </div>
      <button @click="reverseItems3">反转列表3</button>
    </div>

    <!-- 测试4：组件状态保持 -->
    <div style="border: 1px solid #ccc; padding: 10px; margin: 10px">
      <h3>测试4：组件内部状态（没有 key）</h3>
      <div v-for="item in items4">
        <CounterComponent :name="item.name" />
      </div>
      <button @click="reverseItems4">反转列表4</button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Item {
  id: number
  name: string
  text: string
}

// 测试1数据
const items1 = ref<Item[]>([
  { id: 1, name: '项目A', text: '' },
  { id: 2, name: '项目B', text: '' },
  { id: 3, name: '项目C', text: '' }
])

const reverseItems1 = (event: Event) => {
  items1.value.reverse()
  alert(event)
  // console.log((event.target as HTMLButtonElement).value) // 显式为事件处理函数标注类型
}

// 测试2数据（原生DOM操作）
const items2 = ref<Item[]>([
  { id: 1, name: '项目A', text: '' },
  { id: 2, name: '项目B', text: '' },
  { id: 3, name: '项目C', text: '' }
])

const inputRefs = ref<(HTMLInputElement | null)[]>([])

const setInputRef = (index: number, el: HTMLInputElement | null) => {
  inputRefs.value[index] = el
}

const reverseItems2 = () => {
  items2.value.reverse()
  // 这里会看到真正的问题：输入框的DOM状态不会跟随移动
}

// 测试3数据（使用key）
const items3 = ref<Item[]>([
  { id: 1, name: '项目A', text: '' },
  { id: 2, name: '项目B', text: '' },
  { id: 3, name: '项目C', text: '' }
])

const reverseItems3 = () => {
  items3.value.reverse()
}

// 测试4数据（组件状态）
const items4 = ref<Item[]>([
  { id: 1, name: '组件A', text: '' },
  { id: 2, name: '组件B', text: '' },
  { id: 3, name: '组件C', text: '' }
])

const reverseItems4 = () => {
  items4.value.reverse()
}

// 简单的计数器组件
const CounterComponent = defineComponent({
  name: 'CounterComponent',
  props: {
    name: { type: String, required: true }
  },
  setup(props) {
    const count = ref(0)

    return () =>
      h('div', [
        h('span', `${props.name}: `),
        h(
          'button',
          {
            onClick: () => (count.value -= 1)
          },
          '-'
        ),
        h('span', { style: 'margin: 0 10px' }, String(count.value)),
        h(
          'button',
          {
            onClick: () => (count.value += 1)
          },
          '+'
        )
      ])
  }
})
</script>

<style scoped>
input {
  margin-right: 10px;
}
button {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>
