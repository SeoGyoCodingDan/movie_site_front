import React from 'react';
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";

const MovieDetailInfo = ({movieData}) => {
    const useStyles = makeStyles(() => ({
        root: {
            width: '80%',
            flexGrow: 1,
        },
        paper: {
           width: '300px'
        },
    }));
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3} justifyContent="center" direction="row-reverse">

                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <img style={{width: '100%'}} src={movieData.posterurl}
                             alt={'영화포스터'}/>
                    </Paper>
                </Grid>


                <Grid item xs={4}>
                    <Typography variant="h6">
                        영화제목 : {movieData.movienm}
                    </Typography>
                    <Typography variant="h6">
                        개봉일 : {movieData.opendt}
                    </Typography>
                    <Typography variant="h6">
                        상태 : {movieData.prdtstatnm}
                    </Typography>
                    <Typography variant="h6">
                        제작년도 : {movieData.prdtyear}
                    </Typography>
                    <Typography variant="h6">
                        제작국가 : {movieData.repnationnm}
                    </Typography>
                </Grid>

            </Grid>



        </div>
    );
};

export default MovieDetailInfo;