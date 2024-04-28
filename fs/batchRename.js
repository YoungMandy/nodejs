const fs = require('fs');
// fs.access('./fs/demo', fs.constants.F_OK, (err) => {
//   if (err) {
//     console.log('文件夹不存在');
//     // 文件夹不存在
//     fs.mkdir('./fs/demo', (err) => {
//       if (err) {
//         console.log('创建demo文件夹失败', err);
//       } else {
//         console.log('demo文件夹已创建');
//       }
//     });
//   }
// });
try {
  fs.accessSync('./fs/demo', fs.constants.F_OK);
} catch (error) {
  console.log('文件夹不存在', error);
  // 文件夹不存在
  fs.mkdir('./fs/demo', (err) => {
    if (err) {
      console.log('创建demo文件夹失败', err);
    } else {
      console.log('demo文件夹已创建');
    }
  });
}

// 创建多个文件
for (let i = 0; i < 5; i++) {
  fs.writeFileSync(`./fs/demo/poem${i}.txt`, 'utf-8', function (error) {
    if (error) {
      throw error;
    }
    console.log('异步写入数据完成');
  });
}

//读取文件夹名字
fs.readdir('./fs/demo', (err, files) => {
  if (err) {
    console.log('读取文件夹名字失败', err);
  } else {
    for (let i = 0; i < files.length; i++) {
      fs.rename(
        `./fs/demo/${files[i]}`,
        `./fs/demo/春夜喜雨${i + 1}.txt`,
        (err) => {
          if (err) {
            console.log('出错了', err);
          } else {
            console.log('文件名已被修改');
          }
        }
      );
    }
  }
});
