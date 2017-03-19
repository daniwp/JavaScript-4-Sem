var mongoose = require('mongoose');

var jokeSchema = new mongoose.Schema({
    joke: { type: String, min: 5 },
    category: Array,
    reference: { author: String, link: String },
});

var Joke = module.exports = mongoose.model('Joke', jokeSchema);

// Get Jokes
module.exports.getJokes = function (query, callback, limit) {
    Joke.find(query, callback);
};

// Get Jokes by ID
module.exports.getJokeById = function (id, callback) {
    Joke.findById(id, callback);
};

// Add Jokes
module.exports.addJoke = function (client, callback) {
    Joke.create(client, callback);
};

// Update Jokes
module.exports.updateJoke = function (query, update, options, callback) {
    Joke.findOneAndUpdate(query, update, options, callback);
};

// Remove Jokes
module.exports.removeJoke = function (query, options, callback) {
    Joke.findOneAndRemove(query, options, callback);
};

// Remove all Jokes
module.exports.removeAllJokes = function (query, callback) {
    Joke.remove(query, callback);
};