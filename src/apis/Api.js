const axios = require("axios");


axios.defaults.baseURL = 'http://localhost:8000/'


export const getShowingMovie = {
    api: async (pageNum, pageSize) =>
        await axios.get('/movie/showing', {
            params: {
                page: pageNum,
                page_size: pageSize,
            }
        })
}
