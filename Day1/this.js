console.log(this);

function outerFunc() {
    console.log(this);
}

outerFunc();

var person = {
    name: "daniel",
    age: 23,
    toString: function() {
        console.log(this);
    }
}

person.toString;