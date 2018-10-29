var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//model goes below
var beerSchema = new Schema({
    name: String,
    style: String,
    bar: [{ type: Schema.Types.ObjectId, ref: 'Bar'}],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {
    timestamps: true
});

// barSchema.post('remove', function(doc) {
//     this.model('Beer').find(
//         {bars: doc._id},
//         function(err, beers) {
//             beers.forEach(function(beer) {
//             beer.bars.remove(doc._id);
//             beer.save();
//             });
//         }
//     );
// });

module.exports = mongoose.model('Beer', beerSchema);