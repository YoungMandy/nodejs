// 导入第三方模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session'); // 将会话数据存储在服务器上，默认为内存存储，一旦express服务器被重启，那么session数据将会丢失。而session-file-store解决了这个问题，它提供了本地文件的存储，这样，即使服务器重启后，如果用户访问页面，访问状态还在。这两都需要通过npm安装
var FileStore = require('session-file-store')(session);
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 创建服务器对象
var app = express();

var identityKey = 'skey';

var users = require('./users').items;

var findUser = function (name, password) {
  return users.find((item) => item.name === name && item.password === password);
};

// 对服务器进行配置
app.set('views', path.join(__dirname, 'views'));

var ejs = require('ejs');

// 将ejs模版映射至html 文件
app.engine('.html', ejs.__express);
// 设置视图引擎为html
app.set('view engine', 'html');

// 设置中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    name: identityKey,
    secret: 'mingrisoft', // 用于对session id 进行签名
    store: new FileStore(), // 使用FileStore作为会话的存储
    resave: false, // 是否每次都重新保存会话，设置为false
    saveUninitialized: false, // 是否自动保存未初始化的会话，设置为false
    cookie: {
      maxAge: 1000 * 1000, // 过期时间
      // httpOnly: true, // 是否只用于http请求中获取
      // secure: false // 是否安全传输
    },
  })
);

// Get请求，设置用户登录状态
app.get('/', function(req, res, next) {
  var sess = req.session;
  var loginUser = sess.loginUser || ''; // 记录登记用户
  var isLogined = !!loginUser; // 将登录用户变量转为布尔值

  console.log('session', req.session);
  console.log('loginUser', loginUser);

  res.render('index', {
    isLogined: isLogined,
    name: loginUser,
  });
});

// POST请求，判断用户能否登录成功
app.post('/login', function (req, res, next) {
  var sess = req.session;
  var user = findUser(req.body.name, req.body.password);

  if (user) {
    var sess = req.session;
    var user = findUser(req.body.name, req.body.password);

    if (user) {
      req.session.regenerate(function (err) {
        if (err) {
          return res.json({ ret_code: 2, ret_msg: '登录失败' });
        } else {
          req.session.loginUser = user.name;
          res.json({ ret_code: 0, ret_msg: '登录成功' });
        }
      });
    }
  } else {
    res.json({ ret_code: 1, ret_msg: '用户名或密码错误' });
  }
});

// Get请求，退出登录时，清空session
app.get('/logout', function (req, res, next) {
  req.session.destroy(function (err) {
    if (err) {
      return res.json({ ret_code: 2, ret_msg: '退出失败' });
    } else {
      res.clearCookie(identityKey);
      res.redirect('/');
    }
  });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
