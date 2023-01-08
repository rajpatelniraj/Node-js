var http = require('http');
http.createServer(function(req,res) {
    res.write("Hello From Niraj Node Server");
    res.end();
})
.listen(5000)