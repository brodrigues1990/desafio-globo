import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserDetail from './components/pages/UserDetail/UserDetail';
import Error404 from './components/pages/Error404/Error404';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/user" component={UserDetail} />
            <Route path='*' component={Error404} />
        </Switch>
    </ BrowserRouter>
, document.getElementById('root'));