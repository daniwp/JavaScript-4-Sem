let evens = [1,2,3,4,5,6,7,8,9,44,52];

odds  = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, i) => v + i)
/* When you have a function with an implicit arrow function, you
need to put the "return" statement on*/
var odds1 = evens.map((v) => {
    return v + 1;
})
console.log(odds);
console.log(pairs);
console.log(nums);
console.log(odds1);