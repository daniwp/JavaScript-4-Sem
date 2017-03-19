var mongoose = require('mongoose');

module.exports = function (url) {

    mongoose.connect(url);

    return mongoose.connection;

};