const fs = require('fs');

const data = '春夜喜雨\n\t\t杜甫\n好雨知时节，当春乃发生。\n随风潜入夜,润物细无声。\n野径云俱黑，江船火独明。\n晓看红湿处，花重锦官城。';



// 采用异步方式向poem.txt文件写入古诗
fs.writeFile('./fs/poem.txt', data, 'utf-8', function(error) {
  if (error) {
    throw error;
  }
  console.log('异步写入数据完成');
})

// 使用同步方式
fs.writeFileSync('./fs/newpoem.txt', data, 'utf-8');
console.log('同步写入数据完成');



const path = require('path');

const poemPath = path.resolve(__dirname, 'poem.txt');
const appendContent = '\n古诗鉴赏：这首诗描写细腻、动人，诗的情节从概括的叙述到形象的秒回，由耳闻到目睹，当晚到次晨，结构严谨，用词讲究。颇为难写的夜雨景色，却写得十分耀眼突出，使人从字里行间呼吸到一股令人喜悦的春天气息';

fs.appendFile(poemPath, appendContent, function (err) {
  if (err) {
    throw err;
  }
  console.log('内容追加完成');
});

