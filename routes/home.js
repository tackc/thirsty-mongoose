var express = require('express');
var router = express.Router();
var home = require('../controllers/homeController');

router.get('/', home.index);

module.exports = router;
