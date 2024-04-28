
// const http = require('http');
// const url = require('url');
// const fs = require('fs');
// const querystring = require('querystring');

// const game = require('./game');
// const { parse } = require('path');

// http.createServer(function(request, response) {
//   const parsedUrl = url.parse(request.url);
//   if (parsedUrl.pathname === '/favicon.ico') { 
//     response.writeHead(200);
//     response.end();
//     return;
//   }

//   if (parsedUrl.pathname == '/game') {
//     const query = querystring.parse(parsedUrl.query);
//     const playerAction = query.action;

//     const gameResult = game(playerAction);

//     response.writeHead(200);

//     if (gameResult == 0) {
//        response.end('平局');
//     }else if (gameResult == 1) {
//        response.end('你赢了');
//     } else {
//       response.end('风华秋月');
//     }

//   }

//   if (parsedUrl.pathname == '/') {
//     fs.createReadStream(__dirname + '/index.html').pipe(response);
//   }
  
// }).listen(1000)

const http = require('http');
const fs = require('fs');
// http.createServer(function(request, response) {
//   //返回响应内容
 
//   // 读取HTML文件的内容
//   fs.readFile('./index.html', function(err, data) {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.end(data);
//   })
 
// }).listen(52272, function() {
//   console.log('服务器监听的地址是:http://127.0.0.1:52272');
// })


// // 另一个端口，返回图片
// http.createServer(function(request, response) { 
//   // 读取文件
//   fs.readFile('./2.png', function(err, data) {
//     response.writeHead(200, { 'Content-Type': 'image/jpeg' });
//     response.end(data);
//   })
// }).listen(52273, function() {
//   console.log('服务器监听的地址是:http://127.0.0.1:52273');
// })

// // 重定向
// http.createServer(function(request, response) {
//   response.writeHead(302, { 'Location': 'https://www.baidu.com' });
//   response.end();
// }).listen(52274, function() {
//   console.log('服务器监听的地址是:http://127.0.0.1:52274');
// })

// 分析request
http.createServer(function(request, response) {
  if (request.method == 'GET') {
    fs.readFile('./login.html', function(err, data) {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    })
  } else if (request.method == 'POST') { 
    request.on('data', function(data) {
      console.log(data.toString());
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(`<h1>${data}</h1>`);
    })
  }
}).listen(52275, function() {
  console.log('服务器监听的地址是:http://127.0.0.1:52275');
})