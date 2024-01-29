var http = require('http');
var dt = require('./myfirstmodule');
http.createServer(function(req, res){
res.writeHead(200, {'Content-Type': 'text/html'});
res.write("The date and time are currently: " + dt.myDateTime());
//res.end();
res.end('Hello World! <br> This is my First <br> NodeJs Script! <br> Please be patient with me.');
}).listen(8080);