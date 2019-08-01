const Blog = require('../models/blog');

exports.index = (req, res) => {
  Blog.find()
    .published()
    .populate('author')
    .then(blogs => res.json(blogs))
    .catch(err => res.status(404).send(err));
};

exports.show = (req, res) => {

  Blog.findOne({
      _id: req.params.id
  })
      .published()
      .then(blog => res.json(blog))
      .catch(err => res.status(401).send(err));
  };
exports.edit = (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).send({error: "sign in idget"});

  Blog.findOne({
      _id: req.params.id,
      author: req.session.userId
    })
    .then(blog => res.json(blog))
    .catch(err => res.status(404).send(err));
};

exports.create = (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).send({error: "sign in idget"});
  console.log(req.body);

  req.body.blog.author = req.session.userId;
  Blog.create(req.body.blog)
    .then(() => res.status(201).send({success: "Blog was successfully created"}))
    .catch(err => res.status(400).send(err));
};

exports.update = (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).send({error: "sign in idget"});

  Blog.updateOne({
      _id: req.body.id,
      author: req.session.userId
    }, req.body.blog, {
      runValidators: true
    })
    .then(() => res.status(202).send({success: "Your blog was successfully upadated"}) )
    .catch(err => res.status(400).send(err));
};

exports.destroy = (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).send({error: "sign in idget"});

  Blog.deleteOne({
      _id: req.body.id,
      author: req.session.userId
    })
    .then(() => res.status(202).send({success: "Your blog was successfully destroyed"})
   )
    .catch(err => res.status(400).send(err));
};