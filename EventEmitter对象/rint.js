const events = require('events');

const eventObj = new events.EventEmitter();

let num = 0;
setInterval(() => {
  eventObj.emit('tick', num++);
},100)


module.exports = eventObj;