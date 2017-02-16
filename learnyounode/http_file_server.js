
var http = require('http')
var fs = require('fs')

var server = http.createServer((req, res) => {
    var src = fs.createReadStream(process.argv[3])
    src.pipe(res)
    
})
server.listen(process.argv[2])