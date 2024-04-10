var LimitableMap = function(limit) {
  this.limit = limit || 10;
  this.globalMap = {};
  this.objCount = {};
  this.map = {};
  this.keys = new Set();
  this.min = 1;
  this.max = 0;

}

var hasOwnProperty = Object.prototype.hasOwnProperty;
 
LimitableMap.prototype.set = function(key, value) { 
  var globalMap = this.globalMap;
  var objCount = this.objCount;
  var keys = this.keys;
  var map = this.map;


  function updateCount () {
    
     let oldCount = objCount[key] || 0;

     if (oldCount) {
       globalMap[oldCount] = globalMap[oldCount].filter(item => item!== key);;
     }
    

    let newCount = oldCount + 1;
    objCount[key] = newCount;
    
    if(!globalMap[newCount]) {
      globalMap[newCount] = [];
    }

    globalMap[newCount].push(key);
    return newCount;
  }

  if (!hasOwnProperty.call(map, key)) {//还没有存过这个对象
    if (keys.size === this.limit) {// 到达限制了
      let minArray = globalMap[this.min];// 找出现次数最小的
      const removeItem = minArray.shift();// 删除第一个
    
      keys.delete(removeItem);

      // delete objCount[removeItem];
    }

    const newCount = updateCount();

    this.min = newCount < this.min ? newCount : this.min;
    this.max = newCount > this.max ? newCount : this.max;
    keys.add(key);
    map[key] = value;
  } else {
    const newCount = updateCount();

    this.min = newCount < this.min ? newCount : this.min;
    this.max = newCount > this.max ? newCount : this.max;
    map[key] = value;
  }
  
}

LimitableMap.prototype.get = function (key) {
  return this.map[key];
};

const test = new LimitableMap();
for (let i = 0; i < 10; i++){
test.set(`key${i+1}`,'value');
}


for (let i = 5; i < 10; i++) {
  test.set(`key${i + 1}`, 'value');
}

for (let i = 0; i < 3; i++) {
 
  test.set(`key${i + 1}`, 'value');
}

for (let i = 0; i < 3; i++) {
 
  test.set(`key${i + 1}`, 'value');
}

for (let i = 11; i < 13; i++) {
 debugger
  test.set(`key${i + 1}`, 'value');
}






module.exports = LimitableMap;