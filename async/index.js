var a = 0;
function fooA (x) {
  console.log(x);
}

function timer (time,callback) {
  setTimeout(function() {
    a = 6;
    callback(a);
    console.log(a);
  },time)
}

console.log(a);
timer(3000, fooA);


xmlhttp.open('GET', 'xmlhttp_info.txt', true);
xmlhttp.send();