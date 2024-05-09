var express = require('express');
var router = express.Router();

// 创建web服务器
const app = express();

var ejs = require('ejs');

// 将ejs模版映射至html 文件
app.engine('.html', ejs.__express);
// 设置视图引擎为html
app.set('view engine', 'html');

/* GET home page. */
app.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', xss: req.query.xss });
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});



module.exports = router;