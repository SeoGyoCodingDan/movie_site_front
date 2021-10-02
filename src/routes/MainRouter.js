import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MovieDetailContainer from "../pages/movieDetail/MovieDetailContainer";
import MainContainer from "../pages/main/MainContainer";
import SearchResultContainer from "../pages/SearchResult/SearchResultContainer";
import PeopleDetailContainer from "../pages/ActorDetail/PeopleDetailContainer";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={MainContainer}/>
                <Route path='/movie/:movieId' exact component={MovieDetailContainer}/>
                <Route path='/search/:keyword' exact component={SearchResultContainer}/>
                <Route path='/people/:peopleId' exact component={PeopleDetailContainer}/>

            </Switch>
        </BrowserRouter>
    );
};

export default MainRouter;