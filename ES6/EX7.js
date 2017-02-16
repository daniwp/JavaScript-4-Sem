
//A
let fName = "Kurt", lName = "Wonnegut";
let greetings = `Greetings everyone! im ${lName} ${fName}`;
//console.log(greetings);

//B 
function getPerson(val1, val2){
  return {
    firstName: "Kurt",
    lastName: val1,
    gender : "Male",
    email: "kurt@wonnegut.dk",
    phone: val2,

  }
}
console.log(getPerson("Saeid","44558877"));