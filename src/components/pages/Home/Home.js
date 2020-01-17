import React, { Component, Fragment } from 'react';
import Header from '../../organisms/Header/Header';
import styled from 'styled-components';
import { Container, Row, Column } from '../../atoms/Grid/Grid';
import Card from '../../atoms/Card/Card';
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Fragment>
        <Header headerTitle="Github"></Header>
        <Container>
            <Card title="Aluno">Teste conteudo</Card>
            <p className="App-intro"><Link to="/user">link rota</Link></p>
        </Container>
      </Fragment>
    );
  }

}


