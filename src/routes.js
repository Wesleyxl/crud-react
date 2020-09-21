import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Main from './pages/Main';
import Show from './pages/Show';

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/produtos" component={Main}/>
            <Route exact path="/produtos/:id" component={Show}/>
        </Switch>
    </BrowserRouter>

);

export default Routes;
