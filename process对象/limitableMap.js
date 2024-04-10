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
       globalMap[oldCount].delete(key);
     }
    

     let newCount = oldCount + 1;
    objCount[key] = newCount;
    
    if(!globalMap[newCount]) {
      globalMap[newCount] = new Set();
    }

    globalMap[newCount].add(key);
    return newCount;
  }

  if (!hasOwnProperty.call(objCount, key)) {//还没有存过这个对象
    if (keys.size === this.limit) {// 到达限制了
      let minSet = globalMap[this.min];// 找出现次数最小的
      const removeItem = minSet.keys[0];
      minSet.delete(removeItem);
      keys.delete(removeItem);

      delete objCount[removeItem];
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
test.set(i+1);
}
debugger

for (let i = 0; i < 10; i++) {
  test.set(i + 1);
}






module.exports = LimitableMap;