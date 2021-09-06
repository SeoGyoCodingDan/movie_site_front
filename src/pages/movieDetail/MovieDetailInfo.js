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

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3} justifyContent="center" direction="row-reverse" style={{marginTop: 30}}>

                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <img style={{width: '100%'}} src={movieData.posterurl}
                             alt={'영화포스터'}/>
                    </Paper>
                </Grid>


                <Grid item xs={4}>
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
                                {movieData.movienm}
                            </Typography>
                            <Typography variant="h5">
                                {movieData.opendt}
                            </Typography>
                            <Typography variant="h5">
                                {movieData.prdtstatnm}
                            </Typography>
                            <Typography variant="h5">
                                {movieData.prdtyear}
                            </Typography>
                            <Typography variant="h5">
                                {movieData.repnationnm}
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </div>
    );
};

export default MovieDetailInfo;