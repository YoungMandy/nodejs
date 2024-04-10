const fs = require('fs');
const path = require('path');
var reader = fs.createReadStream(path.resolve(__dirname,'./in.txt'));
var writer = fs.createWriteStream(path.resolve(__dirname,'./out.txt'));

// reader.on('data', function(chunk) {
//   console.log('chunk', chunk);
//   writer.write(chunk)
// })

// reader.on('end', function() {
//   writer.end();
// })

reader.pipe(writer);