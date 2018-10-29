var express = require('express');
var router = express.Router();
var beers = require('../controllers/beersController');


router.get('/', beers.index);
router.get('/new', beers.new);
router.get('/:id', beers.show);
// router.delete('/:id', beers.delete);

router.post('/', beers.create);
router.post('/:id/comments', beers.createComment)

module.exports = router;

// router.post('/:BeerId/bars/barId', beers.createServe);
// router.get('/:id/bars/new', beers.newServe);
// router.delete('/:barId/bars/:barId', beers.deleteServe);