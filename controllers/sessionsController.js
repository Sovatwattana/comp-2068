const Author = require('../models/author');

exports.login = (req, res) => {
  res.render('sessions/login', {
    title: 'Login'
  });
};

exports.authenticate = (req, res) => {
  Author.findOne({
      email: req.body.email
    })
    .then(author => {
      author.authenticate(req.body.password, (err, isMatch) => {
        if (err) throw new Error(err);

        if (isMatch) {
          req.session.userId = author.id;
          req.flash('success', 'You are logged in.');
          res.redirect('/blogs');
        } else {
          req.flash('error', `ERROR: Your credentials do not match.`);
          res.redirect('/login');
        }
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/login');
    });
};

exports.logout = (req, res) => {
  req.session.userId = null;
  req.flash('success', 'You are logged out');
  res.redirect('/');
};