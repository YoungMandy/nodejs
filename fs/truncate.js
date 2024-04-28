const fs = require('fs');

fs.stat('./fs/poem.txt', (err, stats) => {
  if (err) {
    console.log('出错了', err);
  } else {
    console.log('文件原始大小'+stats.size + '字节');
  }
})

fs.truncate('./fs/poem.txt', 110, (err) => {
  if (err) {
    console.log('出错了', err);
  } else {
    console.log('文件大小已被截断');
    fs.stat('./fs/poem.txt', (err, stats) => {
      if (err) {
        console.log('出错了', err);
      } else {
        console.log('文件截断后大小'+stats.size + '字节');
      }
    })
  }
})