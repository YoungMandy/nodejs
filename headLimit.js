
let map = new Map();

for (let i = 0; i < 100000; i++){
  let obj = {
    a: i,
    b: i + 1
  }

  map.set(i, obj);
}

console.log(map)

// node --max-new-space-size=16 headLimit.js 单位：MB