const router = require('express').Router();

const SessionsController = require('../controllers/sessionsController');

router.get('/login', SessionsController.login);
router.post('/authenticate', SessionsController.authenticate);
router.post('/logout', SessionsController.logout);

module.exports = router;