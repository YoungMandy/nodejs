// node.js的内置模块提供了与操作系统交互的能力
// node.js 是基于V8引擎的javascript运行环境

// nodejs内部模块的运行机制
// javascript => nodeJS => c++ => 操作系统

const EventEmitter = require('events').EventEmitter;


class Greektime extends EventEmitter{
  constructor () {
    super();
    setInterval(() => {
      this.emit('newlesson', { price: Math.random() * 100 });
    },3000)
  }
}

const greektime = new Greektime();
greektime.addListener('newlesson', (res) => {
  if (res.price < 80) {
    console.log('buy!',res.price);
  }
})

