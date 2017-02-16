function myModule() {
    this.f = function () {
        let restVal = "Rest value is a ";

        let sum = arguments[0] + arguments[1];
        console.log(sum);
        for (var i in arguments) {
            console.log(restVal + typeof arguments[i]);
        }
    }
}

module.exports = myModule;

