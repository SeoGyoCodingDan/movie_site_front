import React from 'react';
import TopBar from "../../components/TopBar";
import {Grid, Typography} from "@material-ui/core";
import Menubar from "../../components/Menubar";
import MovieCardList from "../../components/MovieCardList";
import {useQuery} from "react-query";
import {getMovieRanking, getShowingMovie} from "../../apis/MovieApi";
import {GridContainer} from "../../components/GridContainer";

const MainContainer = () => {

    const showingMovieList = useQuery(['showingMovieList'], () => getShowingMovie.api(1, 8), {keepPreviousData: true})
    const movieRankingList = useQuery(['movieRanking'], () => getMovieRanking.api(1, 8), {keepPreviousData: true})

    return (
        <div>
            <TopBar/>

            <GridContainer container justifyContent="center">

                <Grid item xs={3}>
                    <Menubar/>
                </Grid>
                <Grid item xs={8} style={{marginBottom: '60px'}}>
                    <MovieCardList backgroundColor='#F3F3F3' movieList={showingMovieList?.data?.data.results}/>

                    <Typography color={'secondary'} variant={'h5'}  component={'h5'} style={{marginTop: '65px', fontWeight: 700}}>
                        RANDOM GENRE RANKING
                    </Typography>
                    <MovieCardList movieList={movieRankingList?.data?.data.results } />

                </Grid>
                <Grid item xs={1}/>


            </GridContainer>
        </div>
    );
};

export default MainContainer;