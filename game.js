console.log(process.argv); // 获取输入到node.js的程序的参数

let playerAction = process.argv[process.argv.length - 1];
let random = () => Math.floor(Math.random() * (4 - 1)) + 1;

const map = {
  1: 'rock',
  2: 'scissor',
  3: 'paper',
  
};

let computerAction = map[random()];

if (computerAction == playerAction) {
  console.log('平局');
} else if (
  (computerAction == 'rock' && playerAction == 'paper') ||
  (computerAction == 'scissor' && playerAction == 'rock') ||
  (computerAction == 'paper' && playerAction == 'scissor')
) {
  console.log('你赢了');
} else {
  console.log('你输了');
}
