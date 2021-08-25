var http=require('http');

http.createServer(function(req,res){
    res.write('Hello');
}).listen(8080);