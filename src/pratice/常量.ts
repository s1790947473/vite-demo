// 当需要限制常量的值范围时，可以配合type
// 此类场景优选使用enum
type Sex = '男' | '女'
const m1: Sex = '男1'

console.log(m1)
