const events = require('events');

const custom = new events.EventEmitter();

custom.on('tick', function(code) {
  console.log('执行指定事件',code)
})

custom.emit('tick',1)