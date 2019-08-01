const router = require('express').Router();

const AuthorsController = require('../controllers/authorsController');

router.post('/', AuthorsController.create);

module.exports = router;