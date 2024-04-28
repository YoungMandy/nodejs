const express = require('express');
// 创建web服务器
const app = express();
const port = 3000;
// app.get是用来处理get请求的
// app.use接受一个中间件的处理函数

// 所谓中间件，是指业务流程的中间处理环节。

// app.use((req, res,next) => {
//   const agent = req.headers['user-agent'];

//   console.log('agent', agent);
//   if(agent.includes('iPhone') || agent.includes('Android')){
//     res.send('iphone or android');
//   }else{
//     res.send('pc');
//   }
//   next();
// });

app.use((req, res,next) => {
  req.number = 20;
  res.number = 35;
  next();
})

app.use((req, res, next) => {
  res.send(`<h1>${req.number}+${res.number}</h1>`);
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
