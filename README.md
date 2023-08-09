## console-color-node

> 提供常用的控制台颜色转义序列



**安装:**

*npm*

```cmd
npm i console-color-node
```

*yarn*

```cmd
yarn add console-color-node
```

*pnpm*

```cmd
pnpm add console-color-node
```



**使用:**

```js
// 导入模块
const color = require('console-color-node') 

// 调用函数返回一段序列化后的字符串
color('red', '这是一段红色文本') // '\x1B[31m这是一段红色文本\x1B[0m'

// 输出带颜色的文字
console.log(color('red', '这是一段红色文本')) 

/**
 * 渲染和模板指令冲突的字符串
 * 假设想输出 green 这个字符串
 * 使用数组进行包装, 被数组包装的元素将以原始文本进行输出
 */
// console.log(color('green', 'green')) // 错误示例
console.log(color('green', ['green'])) // 正确示例

// 快速返回一个指定颜色序列化后的字符串(传入多个参数将被拼接合并)
console.log(color.green('这是一段绿色文本'))
console.log(color.red('这是一段红色文本'))
console.log(color.yellow('这是一段黄色文本'))
console.log(color.blue('这是一段蓝色文本'))
console.log(color.cyan('这是一段蓝绿色文本'))
......

// 内置方法
color.success('成功')
color.error('失败')
color.warn('警告')
color.info('信息')
color.info('信息', '这是一条有用的信息')
```




**内置标识符:**

```js
end: 结束(关闭颜色)
shallow: 淡化文本
bold: 文本加粗
italic: 文本斜体
underline: 文本下划线
black: 文本黑色
red: 文本红色
green: 文本绿色
yellow: 文本黄色
blue: 文本蓝色
purple: 文本紫色
cyan: 文本青色
white: 文本白色,
bg-black: 背景黑色,
bg-red: 背景红色,
bg-green: 背景绿色,
bg-yellow: 背景黄色,
bg-blue: 背景蓝色,
bg-purple: 背景紫色,
bg-cyan: 背景青色,
bg-white: 背景白色
```
