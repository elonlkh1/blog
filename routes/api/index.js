const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/signup', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/signin', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/posts', function (req, res, next) {
    res.send('respond with a resource');
});


router.post('/posts/:postId/edit', function (req, res, next) {
    res.send('respond with a resource');
});


router.post('/posts/:postId/comment', function (req, res, next) {
    res.send('respond with a resource');
});



module.exports = router;
