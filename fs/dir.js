const fs = require('fs');

// 检查demo文件夹是否存在
fs.access('demo', fs.constants.F_OK, (err) => { 
  if (err) {
    // 文件夹不存在
    fs.mkdir('demo', (err) => {
      if (err) {
        console.log('创建demo文件夹失败', err);
      } else {
        console.log('demo文件夹已创建');
      }
    });
  }

  const data = fs.readFileSync('./fs/demo/b.txt', 'utf-8').split('\r');

  // 逐个创建文件
  for (let i = 0; i < data.length; i++) { 
    console.log(data[i]);
    const title = data[i];
    fs.writeFile(`./fs/demo/${title}.txt`, 'utf-8', function(error) {
      if (error) {
        throw error;
      }
      console.log('异步写入数据完成');
    })
  }
})