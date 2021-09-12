import React, {useState} from 'react';
import {alpha, AppBar, InputBase, makeStyles, Toolbar, Typography} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        cursor: 'pointer',
        marginLeft: 160,

    },
    whiteSpace:{
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
        marginRight: 160,
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '3',
        cursor:'pointer',
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


const TopBar = (props) => {
    const classes = useStyles();
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');
    const history = useHistory();

    const handleSearch = () => {
        history.push('/search/' + keyword);
    }

    const handleKeyword = (e) => {
        setKeyword(e.target.value);
    }

    const handlePressEnter = (e) => {
        if(e.key === 'Enter') {
            history.push('/search/' + keyword);
        }
    }

    return (
        <AppBar color={"primary"} position="static">
            <Toolbar variant="dense">
                <Typography className={classes.title} color={'secondary'} variant="h6" noWrap onClick={() => {
                    console.log('메인 클릭')
                    history.push('/')
                }}>
                    MovieInfo
                </Typography>
                <div  className={classes.whiteSpace}>

                </div>

                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon color={'secondary'} onClick={handleSearch}/>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{'aria-label': 'search'}}
                        value={keyword}
                        onKeyPress={handlePressEnter}
                        onChange={handleKeyword}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;