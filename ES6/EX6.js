var personObj = {
    fName: "Kurt",
    lName: "Wonnegut", 
    age: 98,
    getInfo: function(){
        console.log(`Hello my name is ${this.fName} ${this.lName}, and I am ${this.age} years old`);
    }
}
personObj.getInfo();
