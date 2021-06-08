const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index.hbs');
})

router.get('/other', (req, res) => {
    res.render('books/books');
})

module.exports = router;