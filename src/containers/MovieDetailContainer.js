import React, {useEffect, useState} from 'react';
import {getMovieDetail} from "../apis/Api";
import TopBar from "../components/TopBar";
import MovieDetailInfo from "../components/MovieDetailInfo";
import Menubar from "../components/Menubar";
import {Grid} from "@material-ui/core";

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
            <Grid container justifyContent="center" >
                <Grid item xs={3}>
                    <Menubar/>
                </Grid>

                <Grid item xs={9}>
                {!loading ? (
                    <MovieDetailInfo movieData={movieData}/>
                ) : null}
                </Grid>

            </Grid>



        </div>
    );
};

export default MovieDetailContainer;