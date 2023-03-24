const style = {
    end: '\x1B[0m',
    shallow: '\x1b[2m',
    bold: '\x1b[1m',
    italic: '\x1B[3m',
    underline: '\x1B[4m',
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    purple: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    'bg-black': '\x1B[40m',
    'bg-red': '\x1B[41m',
    'bg-green': '\x1B[42m',
    'bg-yellow': '\x1B[43m',
    'bg-blue': '\x1B[44m',
    'bg-purple': '\x1B[45m',
    'bg-cyan': '\x1B[46m',
    'bg-white': '\x1B[47m'
}

function toStr(type) {
    return Object.prototype.toString.call(type)
}

// 返回一个转义序列字符串
function color(...color) {
    let result = '';
    for (let i = 0; i < color.length; i++) {
        // 对包装数组的文本采用原字符串输出
        if (toStr(color[i]) === '[object Array]') {
            const arr = color[i];
            for (let j = 0; j < arr.length; j++) {
                result += arr[j];
            }
        }
        // 转义 返回对应 style内的样式
        else if (style[color[i]]) {
            result += style[color[i]];
        }
        // 原始文本
        else {
            result += color[i];
        }
    }
    return result
}

color.log = function (...text) {
    return console.log(color(...text))
}

module.exports = color;
