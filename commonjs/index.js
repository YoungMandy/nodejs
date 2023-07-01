console.log('start script');
const lib = require('./lib.js');
console.log('end script');
console.log('lib', lib);
lib.additional = 123;
lib.test = 'hello world';
const { text } = require('./lib.js');
console.log('text', text);
setTimeout(() => {
  console.log('setTimeout lib',lib)
}, 300);
