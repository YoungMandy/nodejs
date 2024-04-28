const fs = require('fs');
// fs.copyFile('./fs/poem.txt', './fs/newpoem.txt', (err) => {
//   if (err) {
//     console.log('出错了', err);
//   } else {
//     console.log('文件已被复制');
//   }
// }
// )

// 读取文件
// fs.readFile('./fs/poem.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log('读取文件失败', err);
//   } else {
//     console.log(data);
//     fs.writeFile('./fs/poem2.txt', data, 'utf-8', function(error) {
//       if (error) {
//         throw error;
//       }
//       console.log('异步写入数据完成');
//     })
//   }
// })

// 修改文件名
fs.rename('./fs/poem.txt', './fs/春夜喜雨.txt', (err) => {
  if (err) {
    console.log('出错了', err);
  } else {
    console.log('文件名已被修改');
  }
})