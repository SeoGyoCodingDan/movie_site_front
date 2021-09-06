import axios from "./axios";


export const getShowingMovie = {
    api: async (pageNum, pageSize) =>
        await axios.get('/movie/showing', {
            params: {
                page: pageNum,
                page_size: pageSize,
            }
        })
}


export const getMovieDetail = {
    api: async (movieId) =>
        await axios.get('/movie/detail/' + movieId)
}
