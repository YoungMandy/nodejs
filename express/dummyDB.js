const dummyDB = (function() {
  const dummyDB = {};
  const storage = [];
  let count = 1;

  // 查询数据库
  dummyDB.get = function(id) {
    if (id) {
      // 将id转成数字类型
      id = (typeof id === 'string') ? Number(id) : id;
      // 遍历存储的数据，并判断是否找到相应的id
      for (let i in storage) {
        if (storage[i].id === id) {
          return storage[i];
        }
      }
    } else {
      return storage;
    }
  }

  dummyDB.insert = function(data) {
    data.id = count++;
    storage.push(data);
    return data;
  }

  dummyDB.remove = function(id) {
    // 将id转成数字类型
    id = typeof id === 'string' ? Number(id) : id;
    // 遍历存储的数据，并判断是否找到相应的id
    for (let i in storage) {
      if (storage[i].id === id) {
        storage.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  return dummyDB;
})();


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// extends选项为false，表示使用querystring库转换url-encoded数据
app.use(bodyParser.urlencoded({
  extended: false
}));

// 查询所有的用户信息
app.get('/user', (req, res) => {
  res.send(dummyDB.get());
});

// 查询指定id的用户信息
app.get('/user/:id', (req, res) => {
  res.send(dummyDB.get(req.params.id));
});

const fs = require('fs');
app.get('/addUser', function(req, res) {
  fs.readFile('addUser.html', (err, data) => {
    res.send(data.toString());
  });
})


app.post('/addUser', (req, res) => { 
  // 声明变量
  let name = req.body?.name;
  let pass = req.body?.pass;

  // 添加数据
  if (name && pass) {
    res.send(dummyDB.insert({
      name: name,
      pass: pass
    }));
  } else {
    throw new Error('name and pass are required');
  }
  
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});