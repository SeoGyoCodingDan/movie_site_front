import React, {useEffect, useState} from 'react';
import {getMovieDetail} from "../apis/Api";
import TopBar from "../components/TopBar";
import MovieDetailInfo from "../components/MovieDetailInfo";

const MovieDetailContainer = (props) => {
    const [loading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        setLoading(true)
        const movieId = props.match.params['movieId']
        getMovieDetail.api(movieId).then(res => {
            setMovieData(res.data)
            console.log(res.data)
            setLoading(false);
        })
    }, [props.match.params])


    return (
        <div>
            <TopBar/>
            {!loading ? (
                <MovieDetailInfo movieData={movieData}/>
            ) : null}


        </div>
    );
};

export default MovieDetailContainer;