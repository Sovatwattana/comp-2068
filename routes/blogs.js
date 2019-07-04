const router = require('express').Router();

const BlogsController = require('../controllers/blogsController');

// Begin routes

router.get('/', BlogsController.index);
router.get('/drafts', BlogsController.drafts);
router.get('/published', BlogsController.published);
router.get('/new', BlogsController.new);
router.get('/:id', BlogsController.show);
router.get('/:id/edit', BlogsController.edit);
router.post('/', BlogsController.create);
router.post('/update', BlogsController.update);
router.post('/destroy', BlogsController.destroy);

// We have to export our changes
module.exports = router;