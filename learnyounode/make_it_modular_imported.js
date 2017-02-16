var myDirSearcher = require('./make_it_modular');

var path = process.argv[2];
var ext = process.argv[3];

myDirSearcher(path, ext, (err, data) => {
    if (err) {
        return console.log(err);
    }

    console.log(data.join('\n'));
});