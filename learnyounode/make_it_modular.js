
var fs = require('fs');
var path = require('path');

var print_files = function (filepath, ext, callback) {
    fs.readdir(filepath, (err, data) => {
        if (err) {
            return callback(err);
        }
        var filtered = data.filter((value) => {
            return path.extname(value) === ('.' + ext);
        });

        callback(null, filtered);
    })
}

module.exports = print_files;
