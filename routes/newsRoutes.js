const express = require('express');
const router = express.Router();
const { trending, searchArticle, category } = require('../controller/newsController');

//to get the latest trending news
router.route('/trending').get(trending)
//to get the news on category basis
router.route('/category-news').get(category)
//get the result based on search querry
router.route('/search').get(searchArticle)

module.exports = router