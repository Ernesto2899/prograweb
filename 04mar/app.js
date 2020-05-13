//setTimeout(()=>{console.log('Hola 1');}, 0);

//setTimeout(()=>{console.log('Hola 2');}, 0);

//console.log('Hola 3');

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.htm');
    res.end(html);

}).listen(1337, "127.0.0.1");