const rint = require('./rint.js');

// rint.once('tick', function() {
//   console.log(`第1次执行监听事件`)
// })
function listener (code) {

  console.log(`第2次执行监听事件`,code)

}

rint.setMaxListeners(10);

rint.on('tick1', listener);

rint.on('tick1', listener);

rint.on('tick', listener);
rint.prependListener('tick', function() {
  console.log('我要到达队伍前面');
})

console.log(rint.eventNames());

rint.removeListener('tick1', listener);
rint.removeListener('tick1', listener);

console.log('删除后',rint.eventNames());