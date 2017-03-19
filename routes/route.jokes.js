var express = require('express');
var router = express.Router();
var Joke = require('../models/model.joke.js');


// CREATE Joke
router.post('/', function (req, res) {
    Joke.addJoke(req.body, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
});

// READ Joke
router.get('/', function (req, res) {
    Joke.getJokes(function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
});

// READ Joke by ID
router.get('/:id', function (req, res) {
    console.log('endpoint reached');
    Joke.getJokeById({_id: req.params.id}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
});

// UPDATE Joke
router.put('/:id', function (req, res) {
    Joke.updateJoke({_id: req.params.id}, req.body, {}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            Joke.getJokeById({_id: req.params.id}, function (err, data) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(data);
                }
            });
        }
    });
});

// DELETE Joke
router.delete('/:id', function (req, res) {
    Joke.removeJoke({_id: req.params.id}, {}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
});

router.delete('/', function (req, res) {
    Joke.removeAllJokes({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
});

router.all('*', function (req, res) {
    res.status(404);
    res.json({
        status: 404,
        message: "Not found"
    })
});

module.exports = router;