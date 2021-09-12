import React from 'react';
import {makeStyles, MenuItem, MenuList, Paper, Typography} from "@material-ui/core";

const Menubar = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            marginLeft: '160px',
            // position: ,
            width: '160px',
            height: '100%',
            background: '#F3F3F3',
        },
        menuItem: {
            marginTop: 50,
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
        }
    }));

    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <MenuList>
                <MenuItem className={classes.menuItem}>
                    <Typography variant="inherit">GENRE</Typography>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <Typography variant="inherit">MOVIE RANKING</Typography>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <Typography variant="inherit">REVIEW</Typography>
                </MenuItem>
            </MenuList>
        </Paper>

    );
};

export default Menubar;