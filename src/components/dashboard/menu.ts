import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
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
    label: 'naive',
    key: 'lab',
    children: [
      {
        label: 'layout',
        key: '/lab/layout',
        icon: iconfont()
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/lab/form',
              onClick: (e) => e.stopPropagation() // 不让点击label触发展开
            },
            { default: () => 'form' }
          ),
        key: '/lab/form',
        icon: iconfont(),
        children: [{ label: '异常值警告', key: '/lab/form/errWarn', icon: iconfont() }]
      },
      { label: 'table', key: '/lab/table', icon: iconfont() }
    ]
  }
]

// // 基本语法, 用于创建虚拟 DOM 节点。
// h(tag, props, children)

// // 示例
// h('div', { class: 'container' }, 'Hello World')
// h('button', { onClick: handleClick }, 'Click me')
// h('i', { class: 'iconfont icon-home' })
