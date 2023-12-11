const express = require('express');
const newsController = require('../controller/news');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/articles', newsController.getArticles);

router.post('/article', newsController.addArticle);

router.post('/backfill-news', newsController.backfillArticle)

module.exports = router;