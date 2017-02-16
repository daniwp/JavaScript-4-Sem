function* makeNames() {

    let firstNames = ["Lars", "Jan", "Ida", "Tine", "Thomas"];
    let lastNames = ["Mortensen", "Peterson", "Obama", "Jensen", "Hansen"];
    var temp = [];
    for (var i = 0; i < 50; i++) {

        var random = Math.floor(Math.random()* firstNames.length);
        var obj = {};
        obj.firstName = firstNames[random];
        obj.lastName = lastNames[random];
        temp.push(obj);
        yield temp;
    }



}
let index = 0;
for (let name of makeNames()) {
    console.log(name);
    if (index++ === 50) {
        break;
    }
}