const express = require('express');
// 创建web服务器
const app = express();
const port = 3000;
// app.get是用来处理get请求的
// app.use接受一个中间件的处理函数

// 所谓中间件，是指业务流程的中间处理环节。

app.use((req, res) => {
  console.log('req.headers', req.headers);
  const agent = req.headers['user-agent'];
  console.log('agent', agent);
  if(agent.includes('iPhone') || agent.includes('Android')){
    res.send('iphone or android');
  }else{
    res.send('pc');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
