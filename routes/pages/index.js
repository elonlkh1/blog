const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/signup', function (req, res, next) {
    res.render('signup');
});

router.get('/signin', function (req, res, next) {
    res.send('respond with a resource');
});


router.get('/signout', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/posts/:postId', function (req, res, next) {
    res.send('respond with a resource');
});


router.get('/posts/create', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/posts/:postId/edit', function (req, res, next) {
    res.send('respond with a resource');
});

router.delete('/posts/:postId/remove', function (req, res, next) {
    res.send('respond with a resource');
});

router.delete('/posts/:postId/comment/:commentId/remove', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
