import React from 'react';
import TopBar from "../../components/TopBar";
import {Grid, Typography} from "@material-ui/core";
import Menubar from "../../components/Menubar";
import {GridContainer} from "../../components/GridContainer";
import {useQuery} from "react-query";
import {findMovieListByName} from "../../apis/MovieApi";
import MovieCardList from "../../components/MovieCardList";

const SearchResultContainer = (props) => {
    const searchList = useQuery(['searchList',  props.match.params['keyword']],
        () => findMovieListByName.api(1, 10, props.match.params['keyword']),
        {keepPreviousData: true})

    console.log(searchList);
    return (
        <div>
            <TopBar keyword={props.match.params['keyword']}/>
            <GridContainer container justifyContent="center">
                <Grid item xs={3}>
                    <Menubar/>
                </Grid>

                <Grid item xs={8} style={{marginBottom: '60px'}}>
                    <Typography color={'secondary'} variant={'h5'}  component={'h5'} style={{marginTop: '20px', fontWeight: 700}}>
                        RESULTS
                    </Typography>
                    <MovieCardList movieList={searchList.data?.data.results} />
                </Grid>

                <Grid item xs={1}/>
            </GridContainer>
        </div>
    );
};

export default SearchResultContainer;