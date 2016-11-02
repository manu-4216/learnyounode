// Read a file sync

var fs = require('fs');
var args = process.argv.slice(2);

var filePath = args[0];

var bufferString = fs.readFileSync(filePath).toString();
var answer = bufferString.split('\n').length - 1;

console.log(answer);