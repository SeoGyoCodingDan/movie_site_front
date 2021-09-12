import React from 'react';
import TopBar from "../../components/TopBar";
import {Grid} from "@material-ui/core";
import Menubar from "../../components/Menubar";
import MovieCardList from "../../components/MovieCardList";
import {useQuery} from "react-query";
import {getShowingMovie} from "../../apis/MovieApi";

const MainContainer = () => {

    const showingMovieList = useQuery(['movieRanking'], () => getShowingMovie.api(1, 8), {keepPreviousData: true})

    return (
        <div>
            <TopBar/>

            <Grid container justifyContent="center">

                <Grid item xs={3}>
                    <Menubar/>
                </Grid>
                <Grid item xs={8}>
                    <MovieCardList backgroundColor='#F3F3F3' movieList={showingMovieList?.data?.data.results}/>
                </Grid>
                <Grid item xs={1}/>


            </Grid>
        </div>
    );
};

export default MainContainer;