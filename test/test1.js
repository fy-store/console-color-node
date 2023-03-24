const color = require('../index')
console.color = color.log; // 挂载至console上

// 使用
console.color('red', '这是一段红色文本', 'end', 'blue', '这是一段蓝色文本', 'end');
