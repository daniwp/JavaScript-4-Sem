// block scoping
var a = 1;

if(true) {
    let b = 2;
}
console.log(b);

//classes
class Parent {
    age= 34;
    constructor() {

    }
   static foo() {

    }
    bar(){

    }
}
var parent = new Parent(); 
Parent.foo();

class Child extends Parent{
    constructor(){
        super()
    }
    baz() {

    }
}
var child = new Child();
child.bar();

//arrow functions
var foo = (a,b)=>{
    return a + b;
}

[0,1,2].map(val => val++); //[1,2,3]
//arrow functions binds "this"
var module = {
    age: 19,
    foo: function() {
        setTimeout(() => {
            console.log(this.age);
        }, 1000);
    }
};
module.foo();

//modules
module.exports.foo = function() {

}

module.exports.bar = function() {

}

//import other modules
import myModule from "myModule";
//specifying imports from the module 
import {foo} from "myModule";


