const axiosHandler = require('../utils/axiosHandler')
const url = process.env.NEWS_API_URL

exports.trending = async (req, res) => {
    try {
        const { country = 'in', page = 1 } = req.query
        const result = await axiosHandler.get(`${url}/top-headlines?country=${country}&page=${page}`)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(400).send(error)
    }
}

exports.category = async (req, res) => {
    try {
        const { country = 'in', category, page = 1 } = req.query
        const result = await axiosHandler.get(`${url}/top-headlines?country=${country}&category=${category}&page=${page}`)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(401).send(error)
    }
}
exports.searchArticle = async (req, res) => {
    try {
        const keywords = req.query.keywords
        const result = await axiosHandler.get(`${url}/everything?q=${keywords}`)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(401).send(error)
    }
}