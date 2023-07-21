const color = require('../index')

// 使用
console.log(color('red', '这是一段红色文本', 'end', 'blue', ' ', '这是一段蓝色文本', 'end'))

/**
 * 渲染和模板指令冲突的字符串
 * 假设想输出 green 这个字符串
 * 使用数组进行包装, 被数组包装的元素将以原始文本进行输出
 */
// console.log(color('green', 'green', 'end')) // 错误示例
console.log(color('green', ['green'], 'end')) // 正确示例

// 内置方法(仅处理第一个传入的参数)
console.log(color.green('这是一段绿色文本'))
console.log(color.red('这是一段红色文本'))
console.log(color.yellow('这是一段黄色文本'))
console.log(color.blue('这是一段蓝色文本'))

color.success('成功')
color.error('失败')
color.warn('警告')
color.info('重要信息')
