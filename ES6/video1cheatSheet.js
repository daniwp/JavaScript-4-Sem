//destructuring 
var foo = {
    bar: 1, 
    baz: 3
};

var {bar, baz} = foo;
//playing with arrays
var tenses = ["you","me","he","she"];
var [ firstArgument, secondArgument ] = tenses;

//promises
Promise.all(promise1, promise2).then(function(results){
    var [ results ] = results;
});

//destructuring objects

var fooo = 2;
var obj = {
    bar1: 1, 
    fooo
}

var name = "hazem";
var obj1 = {
    ["name" + name]: "value",

};
console.log(obj1);

//destructuring arguments
function calcBmi({weight: w, height: h, max = 25, callback}){
    var bmi = w /Math.pow(h, 2);

    if(bmi > max){
        console.log("Youre overweight");
    }
    if(callback) {
        callback(bmi);
    }
}
calcBmi({weight, height, max: 25});
calcBmi({weight, height, callback: function() {}});

//template strings
var name = "will";
var thing = "party";
var greet = `hi, my name is ${name} 
and I like to ${thing}`;
console.log(greet);