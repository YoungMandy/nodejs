const koa = require('koa');
const fs = require('fs');
const mount = require('koa-mount');
const static = require('koa-static');

const app = new koa();
app.use(
  static(__dirname + '/source/')
)
app.use(mount('/', async (ctx) => {
  ctx.body = fs.readFileSync(__dirname + '/source/index.html', 'utf8');
}))

app.listen(4000);