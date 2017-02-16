var person = {
    fname: "daniel",
    lname: "winkel",
    age: 23,
    email: "winkel@daniel.dk"
};

function loopProp(object) {
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            console.log(property);
        };
    };
};

loopProp(person);
delete person.age;
console.log("---------------------");
loopProp(person);

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.details = function() {
        return `${firstName} ${lastName} is ${age} yo.`;
    };
};

var daniel = new Person("Daniel", "Winkel", 23);
console.log(daniel.details());

function listAllProperties(o) {
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result; 
}

console.log(listAllProperties(daniel));
delete daniel.age;
console.log(listAllProperties(daniel));

