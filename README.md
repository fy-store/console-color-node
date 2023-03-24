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

console.log(color('red', '这是一段红色文本', 'end')); // 输出带颜色的文字
// 或
color.log('red', '这是一段红色文本', 'end');
```



**挂载:**

为了方便使用可以将它挂载至全局

```js
const color = require('console-color-node');
console.color = color.log; // 挂载至console对象上
console.color('red', '这是一段红色文本', 'end'); // 使用
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



**示例:**

```js
// ===============示例================
//
// const color = require('console-color-node');
//
// 直接调用
// color.log('red', 'underline', 'bold', 'bg-yellow', '这是一段紫色文本', 'end');
//
//
// 挂载至 console上
// console.color = color.log;
//
// 使用示例
// console.color('red', '这是一段红色文本', 'end', 'blue', '这是一段蓝色文本', 'end');
//
// 当需要使用纯文本而与内置标识符(style)冲突时, 可以使用数组进行包装
// console.color('red', ['red'], 'end', 'green', ['green'], 'end');
//
// 推荐在每个函数结束时使用 end 关闭颜色(初始化), 否则输出可能会影响后续的语句

// console.log(color('red', 'underline', 'bold', 'bg-yellow', '这是一段红色文本', 'end'));
```





**内置log方法:**

在 color 函数上提供了一个 log() 方法, 即 color.log()

该方法内部调用 console.log() , 是在其基础上进行封装

*示例:*

```js
const color = require(' color-console-log');
// =======
let text = color('red', '这是一段红色文本', 'end'); // 获得转义序列字符串
console.log(text); // 输出字符串

// =======
// 可以简写为
color.log('red', '这是一段红色文本', 'end');
```

