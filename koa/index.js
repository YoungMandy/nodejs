const koa = require('koa');
const app = new koa();
app.use((ctx,next) => {
  console.log('first');
  next();// 设置中间件

  console.log('third');
  ctx.body = '在koa中使用中间件'
})

app.use((ctx, next) => {
  console.log('second');// 同步操作
  
})

app.listen(3000);