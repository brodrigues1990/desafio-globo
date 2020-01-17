import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css';
import { BrowserRouter, Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import { Container } from './components/atoms/Grid/Grid';
import Header from './components/organisms/Header/Header';
import UserDetail from './components/pages/UserDetail/UserDetail';
import Error404 from './components/pages/Error404/Error404';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const ButttonBack = styled.button `
    background:none;
    padding:0;
`
function IsHome(){
    let match = useRouteMatch("/");
    if(!match.isExact){
        return <ButttonBack><Link to="/"><FontAwesomeIcon icon={faArrowLeft} />Voltar</Link></ButttonBack>
    }else{
        return null;
    }
}

ReactDOM.render(
    <Fragment>
        <Header></Header>
        <Container>         
            <BrowserRouter>
                <IsHome/>
                <Switch>
                    <Route path="/" exact={true} component={App} />
                    <Route path="/user" component={UserDetail} />
                    <Route path='*' component={Error404} />
                </Switch>
            </ BrowserRouter>
        </Container>
    </Fragment>
    
, document.getElementById('root'));