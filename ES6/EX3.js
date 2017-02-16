//part A(not done)
function Numbers(numbs) {

  this.nums = numbs;
  this.fives = [];
  
  this.nums.forEach((v) => {
    if (v % 5 === 0) {
      this.fives.push(v);
    }
  });
}
var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);

var counter = {
    count: 0,
    inc: (count)=> {count++;}
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one
//output on both will now be 0 so the arrow notation did not work
