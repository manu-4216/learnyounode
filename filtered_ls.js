/* Return a list (one per line) of files from a given folder (1st arg), and 
 * having a given extenson (2nd arg)
 */
 
var fs = require('fs');
var args = process.argv.slice(2);

var folderPath = args[0];
var extension = args[1];

fs.readdir(folderPath, function(err, list) {
    if (err) {
        console.error(err);
        return;
    }
    list.forEach(function(item) {
        if (item.indexOf("." + extension) > -1) {
            console.log(item);
        }
    });
})