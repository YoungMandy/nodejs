
var express = require('express');
var http = require('http');
var fs = require('fs');

// 声明变量
var seats = [
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
]


// 创建web服务器
var app = express();
var server = http.createServer(app);

// 创建路由
app.get('/', function(req, res,next) {
  fs.readFile('HTMLPage.html', function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data.toString());
    }
  });
})

app.use(express.static('./'));
app.get('/seats', function(req, res, next) {
  res.send(seats);
});


const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};


// 创建一个 WebSocket 代理
const WebSocket = require('ws');

// 创建一个新的 WebSocket 服务器实例
const wsServer = new WebSocket.Server({ server });

wsServer.on('connection', (ws) => {
  console.log('WebSocket connection opened');

  ws.on('message', (data) => {
    console.log(`Received WebSocket message: ${data}`);
    // 将Buffer对象转换为JSON字符串
    const jsonString = data.toString('utf-8');

    // 将JSON字符串解析为JavaScript对象
    const obj = JSON.parse(jsonString);
    console.log('obj', obj);

    seats[obj.y][obj.x] = 2;
    // 向所有的客户发送作为消息怎么实现？
    ws.send(JSON.stringify(obj));
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});


// 启动服务器
server.listen(52273, function() {
  console.log('服务器已启动，监听端口为：http://localhost:52273');
});

