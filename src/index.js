import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css';
import { BrowserRouter, Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import { Container } from './components/atoms/Grid/Grid';
import Header from './components/organisms/Header/Header';
import User from './components/pages/User/User';
import Error404 from './components/pages/Error404/Error404';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const ContainerButttonBack = styled.section`
    width:100%;
    height: 35px;
`
export const ButttonBack = styled.button`
    background: none;
    padding: 0;
    border: 0;
    margin: 0;
    color: #465A65;
    height: 35px;
    cursor: pointer;
`
export const TextButtonBack = styled.span`
    padding-left: 5px;
`

function ButtonBack() {
    let match = useRouteMatch("/");
    if (!match.isExact) {
        return (
            
            <Link to="/"  >
                <ButttonBack>
                        <FontAwesomeIcon icon={faArrowLeft} size="lg"/>  
                        <TextButtonBack>Voltar</TextButtonBack>
                </ButttonBack>
            </Link>
            
        )
    } else {
        return null;
    }
}

ReactDOM.render(
    <Fragment>
        <Header></Header>
        <Container>
            <BrowserRouter>
            <ContainerButttonBack><ButtonBack /></ContainerButttonBack>
                <Switch>
                    <Route path="/" exact={true} component={App} />
                    <Route path="/user/:username" component={User} />
                    <Route path='*' component={Error404} />
                </Switch>
            </ BrowserRouter>
        </Container>
    </Fragment>

    , document.getElementById('root'));