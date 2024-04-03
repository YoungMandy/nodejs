const buffer1 = Buffer.from('geekbang');
const buffer2 = Buffer.from([1, 2, 3, 4]);
const buffer3 = Buffer.alloc(20);

console.log(buffer1);
console.log(buffer2);
console.log(buffer3);

console.log('当前文件名', __filename);
console.log('当前目录', __dirname);

console.time();
console.timeEnd();