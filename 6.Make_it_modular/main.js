var lsModule = require('./ls_module');

var args = process.argv.slice(2);

var folderPath = args[0];
var extension = args[1];

lsModule(folderPath, extension, callback);

function callback(err, list) {
    if (err) {
        return console.log(err);
    }
    list.forEach(function (item) {
        console.log(item);
    });
};