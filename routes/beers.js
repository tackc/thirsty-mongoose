var express = require('express');
var router = express.Router();
var beers = require('../controllers/beersController')

// GET all 
router.get('/', beers.index);
// Add form
router.get('/new', beers.new);
// GET one
router.get('/:id', beers.show);
// POST new beer
router.post('/', beers.create);
// POST new course to a beer
router.post('/:id/bars', beers.addBar);
// Remove course from beer (and vice versa)
// router.get('/:id/bars/:cid/unenroll', beers.removeBar);
// DELETE beer
router.delete('/:id', beers.destroy);

module.exports = router;
