const Author = require('../models/author');

exports.new = (req, res) => {
  res.render('authors/new', {
    title: 'New Author'
  });
};

exports.create = (req, res) => {
  Author.create(req.body.author)
    .then(() => 
      res.status(201).send({succes: "Author was create successfully"})
    )
    .catch(err => res.status(400).send(err));
    
};