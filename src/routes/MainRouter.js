import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MovieDetailContainer from "../pages/movieDetail/MovieDetailContainer";
import MainContainer from "../pages/main/MainContainer";
import SearchResultContainer from "../pages/SearchResult/SearchResultContainer";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={MainContainer}/>
                <Route path='/movie/:movieId' exact component={MovieDetailContainer}/>
                <Route path='/search/:keyword' exact component={SearchResultContainer}/>

            </Switch>
        </BrowserRouter>
    );
};

export default MainRouter;