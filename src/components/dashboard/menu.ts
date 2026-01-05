import type { MenuOption } from 'naive-ui'

function iconfont(icon?: string): (() => VNode) | undefined {
  const defaultIcon = icon || 'zhanghao'
  // 如果默认值也是空的，就不返回
  if (!defaultIcon) {
    return undefined
  }
  // --- 返回渲染函数 ---
  return () => h('i', { class: `iconfont icon-${defaultIcon}` })
}

export const menuOptions: MenuOption[] = [
  {
    label: '练习',
    key: 'lab',
    children: [
      { label: 'layout', key: '/lab/layout', icon: iconfont() },
      { label: 'form', key: '/lab/form', icon: iconfont() },
      { label: 'table', key: '/lab/table', icon: iconfont() }
    ]
  }
]
