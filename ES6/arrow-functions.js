var evens = [2, 4, 6, 8, 12, 16, 18]

var odds = evens.map(v => v + 1);
var odds2 = evens.map((v) => {
    return v + 1
});

pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums = evens.map((v, i) => v + i)

console.log(odds);
console.log(odds2);
console.log(pairs);
console.log(nums);

function NumbersES5(numbs) {

    var self = this;
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
            self.fives.push(v);
        }
    });
}

function NumbersES6(numbs) {

    this.nums = numbs;
    this.fives = []; 
    nums.forEach(v => {
        if (v % 5 === 0)
            this.fives.push(v)
    })
}

var numbersES5 = new NumbersES5([1, 3, 5, 10, 14, 20, 33, 50]);
var numbersES6 = new NumbersES6([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbersES5.fives);
console.log(numbersES6.fives);

var counter = {
    count: 0,
    inc: () => {
      this.count++;
    }
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one

