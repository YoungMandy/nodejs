const fs = require('fs');
const path = require('path');
const demoPath = path.resolve(__dirname, './demo.txt');

fs.access(demoPath, fs.constants.F_OK, function (err) {
  if (err) {
    console.log('demo文件不存在');
  } else {
    console.log('demo文件存在');
  }
});

fs.access("demo1.text",fs.constants.F_OK,function(err){
  if(err){
    console.log("demo1文件不存在");
  }else{
    console.log("demo1文件存在");
  }
})

const text = fs.readFileSync(demoPath, 'utf-8');
console.log('同步读取的内容',text);

// 异步读取
fs.readFile(demoPath, 'utf-8', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log('异步读取的内容', data);
});


const songPath = path.resolve(__dirname, './song.txt');
fs.readFile(songPath, 'utf-8', function(err, data) { 
  if (err) {
    return console.log('歌词文件读取失败');
  }

  data = data.toString();
  var lines = data.split('\n');

  var reg = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s*(.+)/;

  for (let i = 0; i < lines.length; i++){
    (function(index) {
      var line = lines[index];
      var matches = reg.exec(line);

      if (matches) {
        var m = parseFloat(matches[1]);
        var s = parseFloat(matches[2]);
        var ms = parseFloat(matches[3]);

        var content = matches[4];

        var time = m * 60 * 1000 + s * 1000 + ms;

        setTimeout(() => {
          console.log(content);
        },time)
      }
    })(i)
  }
})