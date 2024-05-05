const fs = require('fs');
const path = require('path');
var reader = fs.createReadStream(path.resolve(__dirname,'./in.txt'));
var writer = fs.createWriteStream(path.resolve(__dirname, './out.txt'));

// 通过添加data事件，使用resume()方法或者pipe()方法都可以将可读流从暂停模式切换为流动模式。

reader.on('data', function(chunk) {
  console.log('读到的数据是：', chunk.toString());
  writer.write(chunk);//写入
})

reader.on('end', function() {
  console.log('读完了');
  writer.end();// 停止写入
})
// reader.pipe(writer);