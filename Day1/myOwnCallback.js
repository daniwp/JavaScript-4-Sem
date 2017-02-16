
var namesStrings = ["Daniel", "Bo", "Mohammed", "Anders", "Ib"];
var namesObjects = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];

Array.prototype.namesPrototypeFilter = function (callback) {
    var returnArray = [];

    this.forEach((value) => {
        var shouldInclude = callback(value);

        if (shouldInclude == true) {
            returnArray.push(value);
        }
    })

    return returnArray;
};

Array.prototype.namesPrototypeMap = function (callback) {
    var returnArray = [];

    this.forEach((value) => {
        returnArray.push(callback(value));
    });

    return returnArray;
};

function namesOwnFilter(arr, callback) {
    var returnArray = [];

    arr.forEach((value) => {
        var shouldInclude = callback(value);

        if (shouldInclude == true) {
            returnArray.push(value);
        }
    })

    return returnArray;
};

function namesOwnMap(arr, callback) {
    var returnArray = [];

    arr.forEach((value) => {
        returnArray.push(callback(value));
    });

    return returnArray;
};

var namesOwnFilter = namesOwnFilter(namesStrings, (name) => {
    return name.length >= 3;
});

var namesOwnMap = namesOwnMap(namesStrings, (name) => {
    return name.toUpperCase();
});

var namesUppercase = namesStrings.map((name) => {
    return name.toUpperCase();
});

var names3OrMoreLong = namesStrings.filter((name) => {
    return name.length >= 3;
});

var namesPrototypeMap = namesStrings.namesPrototypeMap((name) => {
    return name.toUpperCase();
});

var namesPrototypeFilter = namesStrings.namesPrototypeFilter((name) => {
    return name.length >= 3;
});

var arrayToLis = function (arr) {
    var returnArr = [];

    returnArr = arr.map((value) => {
        return "<li>" + value + "</li>";
    });

    return returnArr;
};

var unorderedList = function (arr) {
    return `<ul>
        ${arr.join("\n\t")}
    </ul>`;
};

var arrayToTableRows = function (arr) {
    var returnArr = [];

    returnArr = arr.map((person) => {
        return "<tr><td>"
            + person.name +
            "</td><td>"
            + person.phone +
            "</td></tr>";
    });

    return returnArr;
};


var personTable = function (arr) {
    return `<table>
        <thead>
            <th>Name</th>
            <th>Phone</th>
        </thead>
        <tbody>
            ${arr.join(" ")}
        </tbody>
    </table>`;
};

document.getElementById("ul-names").innerHTML = unorderedList(arrayToLis(namesStrings));

document.getElementById("table-persons").innerHTML = personTable(arrayToTableRows(namesObjects));

document.getElementById("filter").onclick = function () {
    
    document.getElementById("ul-names").innerHTML = unorderedList(arrayToLis(names3OrMoreLong));
    document.getElementById("table-persons").innerHTML = personTable(arrayToTableRows(namesObjects.filter((person) => {
        return person.name.length >= 3;
    })));
};


console.log("Own map method: " + namesOwnMap);
console.log("------------------------------------------------");
console.log("Own filter method: " + namesOwnFilter);
console.log("------------------------------------------------");
console.log("JS map method: " + namesUppercase);
console.log("------------------------------------------------");
console.log("JS filter method: " + names3OrMoreLong);
console.log("------------------------------------------------");
console.log("Array Prototype filter method: " + namesPrototypeFilter);
console.log("------------------------------------------------");
console.log("Array prototype map method: " + namesPrototypeMap);
console.log("------------------------------------------------");
console.log("Unordered list of names (map): " + unorderedList(arrayToLis(namesStrings)));
console.log("------------------------------------------------");
console.log("Table of persons (map): " + personTable(arrayToTableRows(namesObjects)));
console.log("------------------------------------------------");
