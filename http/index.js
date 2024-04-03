
const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');

const game = require('./game');
const { parse } = require('path');

http.createServer(function(request, response) {
  const parsedUrl = url.parse(request.url);
  if (parsedUrl.pathname === '/favicon.ico') { 
    response.writeHead(200);
    response.end();
    return;
  }

  if (parsedUrl.pathname == '/game') {
    const query = querystring.parse(parsedUrl.query);
    const playerAction = query.action;

    const gameResult = game(playerAction);

    response.writeHead(200);

    if (gameResult == 0) {
       response.end('平局');
    }else if (gameResult == 1) {
       response.end('你赢了');
    } else {
      response.end('风华秋月');
    }

  }

  if (parsedUrl.pathname == '/') {
    fs.createReadStream(__dirname + '/index.html').pipe(response);
  }
  
}).listen(1000)