console.log('lib.js');
exports.world = 'hello';

exports.add = function(a, b) {
  return a + b;
}

exports.obj = {
  hello:'world'
}

let counter = 3;
function incCounter () {
  counter++;
}

setTimeout(() => {
  console.log('counter', counter);
}, 200)

module.exports = {
  counter: counter,
  incCounter:incCounter
}

setTimeout(() => {
  console.log('module.exports',module.exports)
},200)