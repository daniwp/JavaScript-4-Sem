

var namesStrings = ["Daniel", "Bo", "Mohammed", "Anders", "Ib"];

var name22 = namesStrings.filter((value) => {
    return value.length >= 3;
});

var arrayToLis = namesStrings.map((name) => {
    return "<td>" + name + "</td>"
});

var table = `
<table>
    <tbody>
        ${arrayToLis.join("\n\t")}
    </tbody>
</table>`;

console.log(name22);
console.log(table);
