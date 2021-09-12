import React from 'react';
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
const useStyles = makeStyles(() => ({
    root: {
        width: '80%',
        flexGrow: 1,
    },

    paper: {
        width: '280px'
    },
}));
const MovieDetailInfo = ({movieData}) => {
    const onErrorImg = require('../../../assets/defaultPoster.png').default;
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3} justifyContent="center" direction="row-reverse" style={{marginTop: 30}}>

                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <img style={{width: '100%'}} src={movieData.posterurl}
                             onError={e => {e.target.src = onErrorImg}} alt={'영화포스터'}/>
                    </Paper>
                </Grid>


                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={5} >
                            <Typography variant="h5" style={{fontWeight: 600}}>
                                영화제목 :
                            </Typography>
                            <Typography variant="h5" style={{fontWeight: 600}}>
                                개봉일 :
                            </Typography>
                            <Typography variant="h5" style={{fontWeight: 600}}>
                                상태 :
                            </Typography>
                            <Typography variant="h5" style={{fontWeight: 600}}>
                                제작년도 :
                            </Typography>
                            <Typography variant="h5" style={{fontWeight: 600}}>
                                제작국가 :
                            </Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography variant="h5">
                                {movieData.movienm ? movieData.movienm : '미상'}
                            </Typography>
                            <Typography variant="h5">
                                {movieData.opendt ? movieData.opendt : '미상'}
                            </Typography>
                            <Typography variant="h5">
                                {movieData.prdtstatnm ? movieData.prdtstatnm : '미상'}
                            </Typography>
                            <Typography variant="h5">
                                {movieData.prdtyear ? movieData.prdtyear : '미상'}
                            </Typography>
                            <Typography variant="h5">
                                {movieData.repnationnm ? movieData.repnationnm : '미상'}
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </div>
    );
};

export default MovieDetailInfo;