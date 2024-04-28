const fs = require('fs');
fs.rm('./fs/demo', { recursive: true }, (err) => {
  if (err) {
    console.log('出错了', err);
  } else {
    console.log('文件夹已被删除');
  }
})