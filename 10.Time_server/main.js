     // Node TCP server 
     var net = require('net');
     var dateFormat = require('dateformat');
     
     var server = net.createServer(function (socket) {  
       var formatedDate = dateFormat(new Date(), "yyyy-mm-dd HH:MM");
       socket.end(formatedDate + '\n');
     });
     server.listen(process.argv[2]);