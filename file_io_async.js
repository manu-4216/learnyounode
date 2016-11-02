// Read a file async

var fs = require('fs');
var args = process.argv.slice(2);

var filePath = args[0];

fs.readFile(filePath, 'utf8', function(err, fileContent) {
    if (err) {
        console.error(err);
        return;
    }
    var answer = fileContent.split('\n').length - 1;
    console.log(answer);
});


