console.log("Testing variable before decleration: " + testArr);

var testArr = [1, 2, 3, 5, 2, 3, 5, 3, 4];

console.log("Testing variable after decleration: " + testArr);

console.log("Testing method before decleration: " + testFunction(testArr));

function testFunction(arr) {
    var sum = 0;

    arr.forEach((value) => {
        sum += value;
    });

    return sum;
};

console.log("Testing method after decleration: " + testFunction(testArr));