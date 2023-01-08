var http = require('http');
http.createServer(function (req, res) {
     res.writeHead(200,{'Content-type': 'application\json'})
    res.write('{"name":"niraj"}');
    res.end();
}
).listen(3900)