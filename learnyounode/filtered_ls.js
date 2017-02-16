var path = require('path');

var files = require('fs').readdir(process.argv[2], (err, list) => {
    if (err) {
        console.log(err);
    } else {
        var filtered_list = list.filter((filename) => {
            if (path.extname(filename) === '.' + process.argv[3]) {
                console.log(filename);
            };
        });
    };
});
