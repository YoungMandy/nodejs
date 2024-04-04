const rint = require('./rint.js');

rint.once('tick', function() {
  console.log(`第1次执行监听事件`)
})
// rint.on('tick', function(code) {
//   console.log(`第2次执行监听事件`)
// })

// rint.on('tick', function(code) {
//   console.log(`第3次执行监听事件`)
// })

// rint.on('tick', function(code) {
//   console.log(`第4次执行监听事件`)
// })
// rint.prependListener('tick', function() {
//   console.log('我要到达队伍前面');
// })