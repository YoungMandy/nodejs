// cookie parser中间件主要用来处理cookie请求与响应，由于cookie parser中间件不是express模块的内置的中间件，因此需要通过npm命令进行下载和安装。
// npm install cookie-parser

const express = require('express');
const cookieParser = require('cookie-parser');

// 创建服务器
const app = express();
app.use(cookieParser());
app.get('/', (req, res) => {
  // 设置cookie的内容
  res.cookie('string', 'cookie');
  res.cookie('json', {
    name: 'cookie',
    'property': 'delicious'
  })

  res.send(req.cookies);
  app.get('/get', (req, res) => {
    //发送响应信息
    res.send(req.cookies);
  })
})

// 启动服务器
app.listen(52273, function() {
  console.log('Server running on http://localhost:52273');
})