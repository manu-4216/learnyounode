var http = require('http');
var fs = require('fs');

var portNumber = process.argv[2];
var fileLocation = process.argv[3];

var server = http.createServer(function(request, response) {
    var myAnswer = fs.createReadStream(fileLocation);
    myAnswer.pipe(response);
});

server.listen(portNumber);