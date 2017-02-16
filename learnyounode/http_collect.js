

var http = require('http');

http.get(process.argv[2], (response) => {
    var output = "";
    response.setEncoding('utf8');
    response.on('data', (data) => {
        output += data;
    });

    response.on('end', () => {
        console.log(output.length + "\n" + output);
    });
});