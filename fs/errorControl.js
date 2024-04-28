// 使用同步的方法进行文件操作时，可以使用try-catch语句进行异常处理，
const fs = require('fs');
// try {
//   const data = fs.readFileSync('test.txt', 'utf-8');
//   console.log(data)
// } catch(e) {
//   console.log('出错了', e);
// }


// 使用异方法进行文件操作时，可以使用if-else语句进行异常处理
// fs.readFile('text.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log('出错了', err);
//   } else {
//     console.log(data);
//   }
// })

fs.writeFile('textFile.txt', 'hello world', (err) => {
  if (err) {
    console.log('出错了', err);
  } else {
    console.log('写入成功');
  }
})