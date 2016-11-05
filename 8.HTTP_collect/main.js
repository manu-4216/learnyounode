var http = require('http');
var url = process.argv[2];

var streamConcat = "";

http.get(url, function(response){
    //response.setEncoding('utf8');
    
    response.on("error", function(error){
        console.error(error);
    });
    
    response.on("data", function(data){
        //console.log(data);
        streamConcat = streamConcat + data;
    });
    
    response.on("end", function(data){
        console.log(streamConcat.length);
        console.log(streamConcat);
    });
}).on("error", function(error) {
    console.error(error);
});