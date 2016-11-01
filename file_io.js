var fs = require('fs');
var filePath = process.argv[2];

var bufferString = fs.readFileSync(filePath).toString();
var answer = bufferString.split('\n').length - 1;

console.log(answer);