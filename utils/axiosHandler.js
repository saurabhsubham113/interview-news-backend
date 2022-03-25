const axios = require('axios')
//creating an instance of axios
class AxiosHandler {
    static _axios = axios.create({
        baseUrl: process.env.NEWS_API_URL,
        headers: {
            'X-Api-Key': process.env.NEWS_API_KEY
        }
    })

    async get(url) {
        try {
            const res = await AxiosHandler._axios.get(url)
            if (res) {
                return res.data
            }

        } catch (error) {
            return Promise.reject(error.response.data);
        }
    }

}

module.exports = new AxiosHandler()