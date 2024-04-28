const fs = require('fs');
console.log('准备删除文件');

fs.unlink('./fs/newpoem.txt', (err) => {
  if (err) {
    console.log('出错了', err);
  } else {
    console.log('文件已被删除');
  }
})