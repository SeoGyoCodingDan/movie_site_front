import axios from "./axios";

export const getPeopleByMovieId = {
    api: async (movieId) =>
        await axios.get('/people/list/' + movieId)
}