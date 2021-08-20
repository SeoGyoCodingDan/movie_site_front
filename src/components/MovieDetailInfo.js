import React from 'react';
import {makeStyles, Paper, Typography} from "@material-ui/core";

const MovieDetailInfo = ({movieData}) => {
    const useStyles = makeStyles((theme) => ({
        poster: {
            width: '300px'
        }

    }))
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h6">
                영화제목 : {movieData.movienm}
            </Typography>
            <Typography variant="h6">
                개봉일 : {movieData.opendt}
            </Typography>

            <Paper className={classes.poster} variant="outlined" elevation={3}>
                <img style={{width: '100%'}} src={movieData.posterurl} alt={'영화포스터'}/>
            </Paper>
            <Typography variant="h6">
                상태 : {movieData.prdtstatnm}
            </Typography>
            <Typography variant="h6">
                제작년도 : {movieData.prdtyear}
            </Typography>
            <Typography variant="h6">
                제작국가 : {movieData.repnationnm}
            </Typography>

        </div>
    );
};

export default MovieDetailInfo;