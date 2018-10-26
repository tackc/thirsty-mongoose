var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//model goes below
var commentSchema = new Schema({
    comment: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);