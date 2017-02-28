var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];

var datas = {};
var promises = []; // empty array of Promises
urls.forEach(function (item) {
    promises.push(getData(item));
});

Promise.all(promises)
    .then(function (infos) {
        urls.forEach(function (url) {
            console.log(datas[url]);
        });
    })

function getData (url) {
    var streamConcat = "";
    
    return new Promise(function (resolve, reject) {
        http.get(url, function(response){
            response.on("error", function(error) {
                reject(Error(error));
            });
    
            response.on("data", function(data){
                streamConcat = streamConcat + data;
            });
    
            response.on("end", function(data){
                streamConcat = streamConcat.split('\n').join('');
                datas[url] = streamConcat;
                resolve(streamConcat);
            });
        }).on("error", function(error) {
            reject(Error(error));
        });
    }); // end of Promise
} // end of getData
