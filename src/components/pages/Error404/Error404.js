import React, { Component, Fragment } from 'react';
import Header from '../../organisms/Header/Header';
import styled from 'styled-components';
import { Container, Row, Column } from '../../atoms/Grid/Grid';
import Card from '../../atoms/Card/Card';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Fragment>
        <Header headerTitle="Error"></Header>
        <Container>
            <Card title="Error">Error</Card>
        </Container>
      </Fragment>
    );
  }

}