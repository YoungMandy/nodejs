const fs = require('fs');
fs.realpath('./fs/demo/b.txt',function(err,path){
    if(err){
        console.log(err);
    }else{
        console.log(path);
    }
})