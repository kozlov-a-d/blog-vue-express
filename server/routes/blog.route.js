const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const blog_controller = require('../controllers/blog.controller');


router.get('/test', blog_controller.test);
router.post('/create', blog_controller.blog_create);
router.get('/list', blog_controller.blog_list);
router.get('/:id', blog_controller.blog_details);
router.put('/:id/update', blog_controller.blog_update);
router.delete('/:id/delete', blog_controller.blog_delete);

module.exports = router;