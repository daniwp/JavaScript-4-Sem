
var http = require('http');

var data = http.get(process.argv[2], (response) => {
    response.on("error", (error) => {
        return console.log(error);
    });

    response.setEncoding('utf8');
    response.on("data", (data) => {
        console.log(data);
    });
});

