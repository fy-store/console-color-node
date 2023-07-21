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



**使用:**

```js
const color = require('console-color-node'); // 返回一个函数

// 调用函数返回一段序列化后的字符串
color('red', '这是一段红色文本', 'end'); // '\x1B[31m这是一段红色文本\x1B[0m'

console.log(color('red', '这是一段红色文本', 'end')) // 输出带颜色的文字

// 或(内部使用 console.log() )
color.log('red', '这是一段红色文本', 'end')


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

/** 
 * 推荐在每个函数结束时使用 end 关闭颜色(初始化), 否则输出可能会影响后续的语句
 * 内置方法内部自动调用 end 关闭 
 */
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
