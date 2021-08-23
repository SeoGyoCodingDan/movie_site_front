import React from 'react';
import {makeStyles, MenuItem, MenuList, Paper, Typography} from "@material-ui/core";

const Menubar = () => {
    const useStyles = makeStyles({
        root: {
            position: 'absolute',
            height: '100%',
            background: '#F3F3F3'
        },
    });

    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <MenuList>
                <MenuItem>
                    <Typography variant="inherit">GENRE</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography variant="inherit">MOVIE RANKING</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography variant="inherit">REVIEW</Typography>
                </MenuItem>
            </MenuList>
        </Paper>

    );
};

export default Menubar;