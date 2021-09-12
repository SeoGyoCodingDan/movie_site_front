import axios from "./axios";


export const getShowingMovie = {
    api: async (page, page_size) =>
        await axios.get('/movie/showing', {
            params: {
                page: page,
                page_size: page_size,
            }
        })
}


export const getMovieDetail = {
    api: async (movieId) =>
        await axios.get('/movie/detail/' + movieId)
}


export const getMovieRanking = {
    api: async (page, page_size, genre) =>
        await axios.get('/movie/ranking/', {
            params: {
                page: page,
                page_size: page_size,
                genre: genre,
            }
        })
}


export const findMovieListByName = {
    api: async (page, page_size, keyword) =>
        await axios.get('/movie/search/', {
            params: {
                page: page,
                page_size: page_size,
                search_info: keyword,
            }
        })
}
