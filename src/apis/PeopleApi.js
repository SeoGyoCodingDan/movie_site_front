import axios from "./axios";

export const getPeopleByMovieId = {
    api: async (movieId) =>
        await axios.get('/people/list/' + movieId)
}

export const getPeopleDetail = {
    api: (peopleID) =>
        axios.get('/people/detail/' + peopleID).then(res => res.data)
}


export const getMovieList = {
    api: (peopleID) =>
        axios.get('/people/filmo/' + peopleID).then(res => res.data)
}