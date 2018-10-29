var express = require('express');
var router = express.Router();
var bars = require('../controllers/barsController')

router.get('/', bars.index);
router.get('/new', bars.new);
router.get('/:id', bars.show);
// router.post('/', bars.create);
// router.delete('/:id', bars.delete)

// router.get('/:id/beers/new', bars.newServe);
router.post('/:barId/beers/:beerId', bars.createServe);
router.delete('/:barId/beers/:beerId', bars.deleteServe);

module.exports = router;
