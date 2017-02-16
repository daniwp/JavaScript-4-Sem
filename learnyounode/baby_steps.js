var sum = function(num1, num2) {
    return num1 + num2;
}

//console.log(process.argv);

var arg1 = Number(process.argv[2]);
var arg2 = Number(process.argv[3]);

console.log(sum(arg1, arg2));
