

var net = require('net');
var server = net.createServer((socket) => {
    var date = getDateString();
    socket.end(date);
});

server.listen(process.argv[2]);

function getDateString() {
    var date = new Date();
    console.log(date.getUTCMonth());
    var year = date.getFullYear();
    var month = (date.getMonth() <= 9) ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1;
    var day = (date.getDate() <= 9) ? ("0" + date.getDate()) : date.getDate();
    var hour = (date.getHours() <= 9) ? ("0" + date.getHours()) : date.getHours();
    var minutes = (date.getMinutes() <= 9) ? ("0" + date.getMinutes()) : date.getMinutes();
    console.log(zeroFill(date.getDay()));

    return year + "-" + month + "-" + day + " " + hour + ":" + minutes + "\n";
};

/* NODE'S SOLUTION
function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function now() {
    var d = new Date()
    return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
* /


