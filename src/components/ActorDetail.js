import React from 'react';
import {Grid, Typography} from "@material-ui/core";
// const useStyles = makeStyles(() => ({
//     root: {
//         width: '80%',
//         flexGrow: 1,
//     },
//
//     paper: {
//         width: '280px'
//     },
// }));
const ActorDetail = ({peopleDetail}) => {

    return (
        <Grid container spacing={3} justifyContent="center" direction="row-reverse" style={{marginTop: 30}}>

            {/*<Grid item xs={6}>*/}
            {/*    <Paper className={classes.paper}>*/}
            {/*        <img style={{width: '100%'}} src={actorDetail.posterurl}*/}
            {/*             onError={e => {e.target.src = onErrorImg}} alt={'영화포스터'}/>*/}
            {/*    </Paper>*/}
            {/*</Grid>*/}

            <Grid item xs={6}/>
            <Grid item xs={6}>
                <Grid container>
                    <Grid item xs={5}>
                        <Typography variant="h5" style={{fontWeight: 600}}>
                            이름 :
                        </Typography>
                        <Typography variant="h5" style={{fontWeight: 600}}>
                            성별 :
                        </Typography>
                        <Typography variant="h5" style={{fontWeight: 600}}>
                            직책 :
                        </Typography>

                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="h5">
                            {peopleDetail.peoplenm ? peopleDetail.peoplenm : '미상'}
                        </Typography>
                        <Typography variant="h5">
                            {peopleDetail.sex ? peopleDetail.sex : '미상'}
                        </Typography>
                        <Typography variant="h5">
                            {peopleDetail.reprolenm ? peopleDetail.reprolenm : '미상'}
                        </Typography>

                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default ActorDetail;