const axios = require('axios')

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
            this.handleErrors(error);
            return Promise.reject(error);
        }
    }

    handleErrors(error) {
        if (error.response) {
            const errorMessage = error.response.data.message
            return errorMessage ? errorMessage : 'Something went wrong'
        }

        return 'something not working'
    }
}

module.exports = new AxiosHandler()