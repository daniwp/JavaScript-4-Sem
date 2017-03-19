var express = require('express');
var router = express.Router();

router.all('*', function (req, res) {
    res.status(404);
    res.json({
        status: 404,
        message: "Not found"
    })
});

module.exports = router;