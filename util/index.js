const util = require('util');

function Person () {
  this.name = '老张';
  this.age = 60;
  this.showName = function() {
    return this.name;
  }
}

const man = new Person();
Person.prototype.showAge = function() {
  return this.age;
}
console.log(util.format("%d + %d = %d", 1, 2, 1 + 2));
console.log(util.format('小数: %f', "26.01"));
console.log(util.format('百分数: %d%%', "26"));
console.log(util.format('对象格式化为JSON: %j', man));

console.log(util.inspect(man));
console.log(util.inspect(man, true));

function ch () {
  this.age = 18;
}

util.inherits(ch, Person);

const a = new ch();
console.log('a',a)
console.log(a.showAge())


async function fn () {
  return '这是一个异步函数';
}

const callbackFunction = util.callbackify(fn);

callbackFunction(function(err, res){
  if (err) throw err;
  console.log(res)
})


console.log(util.types.isAnyArrayBuffer(new ArrayBuffer(2)));
console.log(util.types.isAnyArrayBuffer(new SharedArrayBuffer(2)));
console.log(util.types.isArrayBufferView(new Int8Array(2)));
console.log(util.types.isAsyncFunction(function() { }));

console.log('isBoolean', util.types.isBooleanObject(new Boolean(false)));

console.log('是否是原始对象', util.types.isBoxedPrimitive(new String('')));

console.log('是否是Date的实例', util.types.isDate(new Date()));
console.log('是否是Number对象', util.types.isNumberObject(new Number(1)));
console.log('是否是正则表达式', util.types.isRegExp(/^\w+$/));

console.log('是否是String对象', util.types.isStringObject(new String('')));