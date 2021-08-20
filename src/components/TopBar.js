import React from 'react';
import {alpha, AppBar, Button, InputBase, makeStyles, Toolbar, Typography} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {getShowingMovie} from "../apis/Api";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.secondary.main, 0.01),
        '&:hover': {
            backgroundColor: alpha(theme.palette.secondary.main, 0.1),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: theme.palette.secondary.main,
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const clickHandle = async () => {
    await getShowingMovie.api(1, 10).then(res => {
        console.log(res.data);
    }).catch( e => {
        console.log(e.response);
    })
}

const TopBar = () => {
    const classes = useStyles();
    return (
        <AppBar color={"primary"} position="static">
            <Toolbar variant="dense">
                <Link to={'/'} className={classes.title}>
                    <Typography  color={'secondary'} variant="h6" noWrap>
                        MovieInfo
                    </Typography>
                </Link>

                <Button onClick={clickHandle}>asda</Button>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon color={'secondary'} />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;