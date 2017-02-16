var fs = require('fs');

var test_file = process.argv[2];

var buffer = fs.readFileSync(test_file);

var text_output = buffer.toString();

var text_array = text_output.split('\n');

console.log(text_array.length - 1);
