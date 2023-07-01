console.log('lib.js');
exports.text="456"

setTimeout(() => {
  console.log('exports', exports);
}, 200)

module.exports = 123;