import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Main from './pages/Main';
import Show from './pages/Show';
import Edit from './pages/Edit';
import DelProd from './pages/DelProd';
import RegisterProd from './pages/RegisterProd';
import Debug from './pages/Debug';

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/produtos" component={Main}/>
            <Route exact path="/produtos/:id" component={Show}/>
            <Route exact path="/produtos/editar/:id" component={Edit}/>
            <Route exact path="/cadastro" component={RegisterProd}/>
            <Route exact path="/produtos/delete/:id" component={DelProd}/>
            <Route exact path="/debug" component={Debug}/>
        </Switch>
    </BrowserRouter>

);

export default Routes;
