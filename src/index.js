import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from './components/atoms/Grid'
import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'
import User from './components/pages/User'
import Error404 from './components/pages/Error404'
import ButtonBack from './components/atoms/buttonBack'
import Home from './components/pages/Home'

ReactDOM.render(

    <Fragment>
        <Header />
        <Container>
            <BrowserRouter>
                <ButtonBack />
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/desafio-globo" component={Home} />
                    <Route path="/user/:username" component={User} />
                    <Route path='*' component={Error404} />
                </Switch>
            </ BrowserRouter>
        </Container>
        <Footer />
    </Fragment>
    
    , document.getElementById('root'));