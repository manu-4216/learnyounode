var http = require('http');
var urls = process.argv[2].split(' ');
console.log(urls);
console.log("hello");

http.get(urls[0], function(response){
    response.setEncoding('utf8');
    
    response.on("error", function(error){
        console.error(error);
    });
    
    response.on("data", function(data){
        console.log(data);
    });
}).on("error", function(error) {
    console.error(error);
});
