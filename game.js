// console.log(process.argv); // 获取输入到node.js的程序的参数
const game = require('./gameHelper.js');
let count = 1;

// let playerAction = process.argv[process.argv.length - 1];

process.stdin.on('data', e => {
  const playerAction = e.toString().trim();
  console.log(playerAction);

  let res = game(playerAction);
  if (res == 1) {
    count++;
    if (count == 3) {
      process.exit();
    }
  }
})


