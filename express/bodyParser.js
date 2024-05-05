// body parser中间件主要用来处理post请求，由于body parser中间件不是express模块的内置的中间件，因此需要通过npm命令进行下载和安装。
// 使用body parser中间件的前提是设置request对象的body属性

const fs = require('fs');
const express = require('express');
const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');

// 创建服务器
const app = express();

// 设置中间件
app.use(cookieParser());

// extends选项为false，表示使用querystring库转换url-encoded数据
app.use(bodyParser.urlencoded({
  extended: false
}));

// 设置路由配置
app.get('/', (req, res) => {
  if (req.cookies.auth) {
   res.send(`<h1>Hello ${req.cookies.auth}</h1>`);
  } else {
    res.redirect('/login');
  }
 }
)
app.get('/login', (req, res) => {
  // 读取登录页面
  fs.readFile('login.html', (err, data) => {
    res.send(data.toString());
  });
})

app.post('/login', (req, res) => { 
  // 记录登录用户
  const login = req.body.login;
  // 记录登录密码
  const pass = req.body.pass;
  if (login == 'mingrisoft' && pass == '123456') {
    res.cookie('auth', true);
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
})

app.listen(52273, function(){
  console.log('Server running on http://localhost:52273');
})


