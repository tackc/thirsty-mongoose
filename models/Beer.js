var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var commentSchema = new Schema({
    content: String
}, {
    timestamps: true
});
//model goes below
var beerSchema = new Schema({
    name: String,
    style: String,
    bars: [{ type: Schema.Types.ObjectId, ref: 'Bar' }],
    comments: [commentSchema]
}, {
    timestamps: true
});

beerSchema.post('remove', function(doc) {
    this.model('Beer').find(
        {bars: doc._id},
        function(err, beers) {
            beers.forEach(function(beer) {
            beer.bars.remove(doc._id);
            beer.save();
            });
        }
    );
});

module.exports = mongoose.model('Beer', beerSchema);