// 使用接口来定义对象类型

// 定义接口的shape
interface Person {
  name: string
  age: number
}
// 赋值时，变量的形状必须和接口的形状保持一致
let tom: Person = {
  name: 'Tom',
  age: 25
}

// 可选属性，接口中的属性不全都是必填的，但是仍然不允许添加未定义的属性
interface Person1 {
  name: string
  age?: number
}

let tom1: Person1 = {
  name: 'Tom'
}

// 希望一个接口允许有任意的属性，即通过字面量写法自定义属性
interface Person2 {
  name: string
  age?: number
  [propName: string]: unknown // 允许添加string类型的属性名称，值是any。（可以是类型的子集）如果写string，但是any太危险，尽量使用unknown代替any
  // 字符串索引签名”，含义是：只要是 Person 上任意一个用字符串访问的属性（包括 name/age/gender），它的值都必须是 string。
}

const tom2: Person2 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
}

// extra字段，
interface Person3 {
  name: string
  age?: number
  extra: Record<string, string> // 扩展字段，结构更加清晰
}

const tom3: Person3 = {
  name: 'Tom',
  age: 25,
  extra: {
    gender: 'male'
  }
}

// 只读属性 readonly属性时必须存在的，即在创建时就要包含该属性，且后续不允许修改该属性
interface Person4 {
  readonly id: number
  name: string
  age?: number
  [propName: string]: unknown
}

const tom4: Person4 = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
}

tom4.id = 9527
console.log(tom, tom1, tom2, tom3, tom4)

// ** 接口常用实践 **
// 1. 定义组件Props接口
interface ButtonProps {
  type?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  loading?: boolean
  onClick?: (event: MouseEvent) => void
}

// 在Vue组件中使用
export default defineComponent({
  props: {
    type: {
      type: String as PropType<ButtonProps['type']>,
      default: 'primary'
    },
    size: {
      type: String as PropType<ButtonProps['size']>,
      default: 'medium'
    },
    disabled: Boolean,
    loading: Boolean,
    onClick: Function as PropType<ButtonProps['onClick']>
  },
  setup(props: ButtonProps) {
    // 组件逻辑
  }
})

// 2. pinia状态管理
// 用户状态接口
interface UserState {
  user: User | null
  token: string | null
  isLoggedIn: boolean
  permissions: string[]
}

// 在Pinia store中使用
export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    token: null,
    isLoggedIn: false,
    permissions: []
  }),

  actions: {
    async login(credentials: LoginForm): Promise<void> {
      // 登录逻辑
    },

    logout(): void {
      this.user = null
      this.token = null
      this.isLoggedIn = false
    }
  }
})
