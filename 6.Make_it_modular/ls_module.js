module.exports = function (folderPath, extension, callback) {
    var fs = require('fs');
    
    fs.readdir(folderPath, function(err, list) {
        if (err) {
            return callback(err);
        }
        var filteredList = list.filter(function(item) {
            return (item.indexOf('.' + extension) > -1);
        })
        return callback(null, filteredList);
    })
}  