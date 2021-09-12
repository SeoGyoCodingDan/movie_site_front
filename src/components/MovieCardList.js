import React from 'react';
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const MovieCardList = ({backgroundColor, movieList}) => {
    console.log(movieList)
    const onErrorImg = require('../assets/defaultPoster.png').default;
    const history = useHistory();


    return (
        <Grid container spacing={3} style={{backgroundColor: backgroundColor, marginTop: '20px'}}>
            {movieList?.map((movie, i) => (
                <Grid item xs={3}>
                    <Card item key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#E0E0E0',
                        textAlign: 'center',
                        height: '280px',
                    }}
                    onClick={() => history.push('/movie/' + movie.moviecd)}>
                        <CardContent>
                            <img style={{height: '230px', margin: '3px 0'}} src={movie.posterurl}
                                onError={e => {e.target.src = onErrorImg}} alt={'영화 포스터'}/>
                            <Typography>
                                {movie.movienm}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default MovieCardList;