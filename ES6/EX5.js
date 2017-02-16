function f(){
    let restVal = "Rest value is a ";
    
    let sum = arguments[0] + arguments[1];
    console.log(sum);
    for(var i in arguments){
        console.log(restVal + typeof arguments[i]);
    }   

}
//f(3,2,false,5,"hello",[1,2,3], new Date(), {});
//B
var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = [...rest];
//f(5,2,...restParams);

//C 
var chars = [... f(5,2,...restParams)];
console.log(chars);//produces an error with a symbol of undefined
