var express = require('express');
var router = express.Router();

var heroService = require('../hero-service');

router.get('/heroes', function (req, res) {
    heroService.get(req, res);
});

module.exports = router;