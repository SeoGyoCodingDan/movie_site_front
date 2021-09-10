import React, {useEffect, useState} from 'react';
import {getMovieDetail} from "../../apis/MovieApi";
import TopBar from "../../components/TopBar";
import MovieDetailInfo from "./MovieDetailInfo";
import Menubar from "../../components/Menubar";
import {Grid} from "@material-ui/core";
import BottomTab from "./components/BottomTab";
import {useQuery} from "react-query";
import {getPeopleByMovieId} from "../../apis/PeopleApi";

const MovieDetailContainer = (props) => {
    const [loading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        setLoading(true)
        const movieId = props.match.params['movieId']
        getMovieDetail.api(movieId).then(res => {
            setMovieData(res.data);
            setLoading(false);
        })
    }, [props.match.params])

    const peopleList = useQuery(['peopleList'],
        () => getPeopleByMovieId.api(props.match.params['movieId']),
        {keepPreviousData: true})

    return (
        <div>
            <TopBar/>
            <Grid container justifyContent="center">
                <Grid item xs={3}>
                    <Menubar/>
                </Grid>

                <Grid item xs={8}>
                    {!loading ? (
                        <>
                            <MovieDetailInfo movieData={movieData}/>
                            <BottomTab peopleList={peopleList.data}/>
                        </>
                    ) : null}
                </Grid>

                <Grid item xs={1}/>


            </Grid>


        </div>
    );
};

export default MovieDetailContainer;