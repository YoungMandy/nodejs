const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

const https = require('https');
const server = https.createServer(options, function (req, res) {
  // 创建web服务器
  if (req.url == '/') {
    // 读取客户端文件
    fs.readFile('./index.html', function (err, data) {
      res.end(data);
    });
  }
});



// 创建socket服务器
// const socket = require('socket.io');
// const io = socket(server);
// io.sockets.on('connection', function (socket) {
//   console.log('有客户端连接');
// });

// 创建一个 WebSocket 代理
const WebSocket = require('ws');

// 创建一个新的 WebSocket 服务器实例
const wsServer = new WebSocket.Server({ server });

wsServer.on('connection', (ws) => {
  console.log('WebSocket connection opened');

  ws.on('message', (message) => {
    console.log(`Received WebSocket message: ${message}`);
    ws.send(`Echo: ${message}`);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});


server.listen(52273, function (socket) {
  console.log('监听地址在:https://127.0.0.1:52273');
});
