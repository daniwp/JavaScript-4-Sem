

var http = require("http");

var server = http.createServer((req,res)=> {
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Hello World!!</h1>");
});

server.listen(1234, "localhost", ()=> console.log("Server startet! Niiice"));