var express = require('express');
var router = express.Router();

/* GET constant string */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'swiggity swooty. i want the booty'});
});

/* POST constant string */
router.post('/', function(req, res, next) {
    res.render('post', { string: req.body.string, stringLen: req.body.string.length});
});

module.exports = router;
