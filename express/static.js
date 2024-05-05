// static中间件是express模块内置的托管静态文件的中间件

const express = require('express');

//创建服务器
const app = express();
app.use(express.static(__dirname + '/image'));

app.use((req, res) => {
  // 发送响应信息
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('<img src="/2.png">')
})

// 启动服务器
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

