import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import { BrowserRouter, Switch, Route, useHistory , useRouteMatch } from 'react-router-dom'
import { Container } from './components/atoms/Grid';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import User from './components/pages/User';
import Error404 from './components/pages/Error404';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Home from './components/pages/Home';
export const ContainerButttonBack = styled.section`
    width:100%;
    height: 50px;
`
export const ButttonBack = styled.button`
    background: none;
    padding: 0;
    border: 0;
    margin: 0;
    color: #465A65;
    height: 50px;
    cursor: pointer;
`
export const TextButtonBack = styled.span`
    padding-left: 5px;
    font-weight: 600;
`

function ButtonBack() {
    let match = useRouteMatch("/");
    let history = useHistory();
    if (!match.isExact) {
        return (
            
            
                <ButttonBack onClick={() => history.goBack()}>
                        <FontAwesomeIcon icon={faArrowLeft} size="lg"/>  
                        <TextButtonBack>Voltar</TextButtonBack>
                </ButttonBack>
            
            
        )
    } else {
        return null;
    }
}

ReactDOM.render(
    <Fragment>
        <Header/>
        <Container>
            <BrowserRouter>
            <ContainerButttonBack><ButtonBack /></ContainerButttonBack>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/user/:username" component={User} />
                    <Route path='*' component={Error404} />
                </Switch>
            </ BrowserRouter>
        </Container>
        <Footer/>
    </Fragment>

    , document.getElementById('root'));