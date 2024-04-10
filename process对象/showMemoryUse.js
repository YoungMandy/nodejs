var showMemo = function() {
  var mem = process.memoryUsage();
  var format = function(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + 'MB';
  }

  console.log('Memory Usage:\n RSS:' + format(mem.rss) + ', HeapTotal:' + format(mem.heapTotal) + ', HeapUsed:' + format(mem.heapUsed));
  
  console.log('-------------------')
}

var useMemo = function() {
  var size = 20 * 1024 * 1024 ;

  // var arr = new Array(size);
  var arr = new ArrayBuffer(size);

  for (var i = 0; i < size; i++){
    arr[i] = 0;
  }

  return arr;
}

var total = [];


for (var j = 0; j < 15; j++){
  showMemo();
  total.push(useMemo());
}

showMemo();

