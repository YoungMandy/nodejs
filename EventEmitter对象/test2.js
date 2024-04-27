//引入events模块
var events = require('events');

// 生成EventEmitter对象
var custom = new events.EventEmitter();
custom.on('click', function(code) {
  console.log('执行指定事件',code)
})

// 主动触发监听事件
custom.emit('click', 1);

