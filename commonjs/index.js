console.log('start script');
const lib = require('./lib.js');
console.log('end script');
console.log('lib', lib);

lib.additional = {
  'test': 'test'
}

console.log(lib.counter);
lib.incCounter();

console.log(lib.counter);

