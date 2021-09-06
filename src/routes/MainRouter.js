import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MovieDetailContainer from "../pages/movieDetail/MovieDetailContainer";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/movie/:movieId' exact component={MovieDetailContainer}/>
            </Switch>
        </BrowserRouter>
    );
};

export default MainRouter;