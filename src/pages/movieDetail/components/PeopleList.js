import React from 'react';
import {Card, CardContent, Grid, makeStyles, Typography} from "@material-ui/core";

const PeopleList = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            minWidth: 275,
            background: theme.palette.primary.main
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    }));
    console.log(props.actorList);

    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            {props.actorList?.map((actor, i) => (
                <Grid item xs={4}>
                    <Card key={i} className={classes.root}>
                        <CardContent>
                            <Typography variant="h6" component="h5">
                                {actor.peoplenm}
                            </Typography>
                            <Typography>
                                {actor.reprolenm}
                            </Typography>
                            <Typography>
                                {actor.sex}
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
            ))}

        </Grid>
    );
};

export default PeopleList;