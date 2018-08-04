const Blog = require('../models/blog.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.blog_create = function (req, res) {
    let blog = new Blog(
        {
            date: Date.now(),
            isActive: true,
            thumb: "http://placehold.it/320x240",
            picture: "http://placehold.it/1920x380",
            title: req.body.title,
            author: {
                first: "Atkinson",
                last: "Goodwin",
                picture: "http://placehold.it/32x32",
            },
            description: req.body.description || req.body.fulltext.substring(0,255)+'...',
            fulltext: req.body.fulltext,
            tags: req.body.tags
        }
    );

    blog.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('blog Created successfully')
    })
};

exports.blog_details = function (req, res) {
    Blog.findById(req.params.id, function (err, blog) {
        if (err) return next(err);
        res.send(blog);
    })
};

exports.blog_list = function (req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) return next(err);
        // console.log(blogs);
        // res.send(blogs.reduce(function(blogsMap, item) {
        //     blogsMap[item.id] = item;
        //     return blogsMap;
        // }, {}));
        res.send(blogs);
    });
};

exports.blog_update = function (req, res) {
    Blog.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, blog) {
        if (err) return next(err);
        res.send('blog udpated.');
    });
};

exports.blog_delete = function (req, res) {
    Blog.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};