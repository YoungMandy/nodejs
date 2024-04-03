module.exports = function (playerAction) {
  let random = () => Math.floor(Math.random() * (4 - 1)) + 1;

  const map = {
    1: 'rock',
    2: 'scissor',
    3: 'paper',
  };

  let computerAction = map[random()];

  console.log('Computer action: ' + computerAction);
  console.log('Player action: ' + playerAction);

  if (computerAction == playerAction) {
    console.log('平局\n');
    return 0;
  } else if (
    (computerAction == 'rock' && playerAction == 'paper') ||
    (computerAction == 'scissor' && playerAction == 'rock') ||
    (computerAction == 'paper' && playerAction == 'scissor')
  ) {
    console.log('你赢了\n');
    return -1;
  } else {
    console.log('你输了\n');
    return 1;
  }
};