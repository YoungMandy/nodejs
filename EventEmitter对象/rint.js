const events = require('events');

const eventObj = new events.EventEmitter();

let num = 0;
const timer = setInterval(() => {
  eventObj.emit('tick', num++);
}, 100)

setTimeout(() => {
  clearInterval(timer);
}, 1000)


module.exports = eventObj;