

var http = require('http');
var args = process.argv;

var output1 = "";
var output2 = "";
var output3 = "";

http.get(args[2], (response) => {
    response.on('data', (data) => {
        output1 += data.toString();
    });

    response.on('end', () => {
        console.log(output1);

        http.get(args[3], (response) => {
            response.on('data', (data) => {
                output2 += data.toString();
            });

            response.on('end', () => {
                console.log(output2);

                http.get(args[4], (response) => {
                    response.on('data', (data) => {
                        output3 += data.toString();
                    });

                    response.on('end', () => {
                        console.log(output3);
                    });
                });
            });
        });
    });
});


