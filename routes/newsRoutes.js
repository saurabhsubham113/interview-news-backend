const express = require('express');
const router = express.Router();
const { trending, searchArticle, category } = require('../controller/newsController');


router.route('/trending').get(trending)
router.route('/category-news').get(category)
router.route('/search').get(searchArticle)

module.exports = router