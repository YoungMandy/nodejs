const fs = require('fs');
fs.stat('./fs/demo', (err, stats) => {
  if (err) {
    console.log('出错了', err);
  } else {
    console.log('文件夹信息',stats);
  }
})