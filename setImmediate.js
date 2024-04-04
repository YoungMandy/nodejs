console.log('正常执行1');
var a = setImmediate(function() {
  console.log('我被延迟执行了');
})

console.log('正常执行');
// setImmediate是在I/O事件的回调之后立即执行的函数