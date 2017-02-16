var http = require('http')
var fs = require('fs')
var map = require('through2-map')

var server = http.createServer((req, res) => {

    var src = fs.createReadStream(req)
    src.pipe(map((chunk) => {
        console.log(typeof chunk)
    })).pipe(res)

})
server.listen(process.argv[2])

