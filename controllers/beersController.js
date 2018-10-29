const Beer = require('../models/Beer');
// const Bar = require('../models/Bar');
const Comment = require('../models/Comment');

module.exports = {

    index: function(req, res, next) {
        Beer.find({}, function(err, beers) {
            if (err) return next(err);
            res.render('beers/index', { beers });
        });
    },

    new: function(req, res, next) {
        res.render('beers/new');
    },

    create: function(req, res, next) {
        let data = req.body;
        Beer.create({
            name: data.name,
            style: data.style,
            bar: data.bar,
            comment: data.comment
        }, function(err) {
            if (err) return next(err);
            res.redirect('/beers');
        });
    },
    
    deleteBeer: function(req, res, next) {
        Beer.findById(req.params.id, (err, beer) => {
            beer.remove();
            res.redirect('/beers');
        });
    },

    show: function(req, res, next) {
        Beer.findById(req.params.id).populate('bars').exec(function(err, beer) {
            if (err) return next(err);
            res.render('beers/show', { beer });
        });
    },

    createComment: function(req, res, next) {
        Beer.findById(req.params.id).exec((err, beer) => {
            beer.comments.push({content: req.body.content});
            beer.save(err => {
                res.redirect(`/beers/${beer.id}`);
            });
        });
    }
    
    // addBar: function(req, res, next) {
    //     Beer.findById(req.params.id, function(err, beer) {
    //         if (err) return next(err);
    //         Bar.findById(req.body.bar, function(err, bar) {
    //             if (err) return next(err);
    //             beer.bars.push(bar);
    //             beer.save(function(err) {
    //                 if (err) return next(err);
    //                 bar.beers.push(beer);
    //                 bar.save(function(err) {
    //                     if (err) return next(err);
    //                     res.redirect('/beers/' + beer._id);
    //                 });
    //             });
    //         });
    //     });
    // },
    
    // destroy: function(req, res, next) {
    //     Beer.remove({_id: req.params.id}, function(err) {
    //         if (err) return next(err);
    //         res.redirect('/beers');
    //     })
    // }

}