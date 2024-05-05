// 使用router中间件可以方式实现页面的路由跳转

const express = require('express');
// 创建web服务器
const app = express();

app.get('/page/:id', (req, res) => {
  const name = req.params.id;
  res.send(`<h1>Hello ${name}</h1>`);
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});