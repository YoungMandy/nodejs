const fs = require('fs');
fs.readdir('./fs', (err, files) => { 
  if (err) {
    console.log('读取文件夹名字失败', err);
  }

  console.log(files);
})