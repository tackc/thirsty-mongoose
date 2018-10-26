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

module.exports = mongoose.model('Beer', beerSchema);