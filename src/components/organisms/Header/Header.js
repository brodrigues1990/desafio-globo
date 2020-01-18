import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from '../../atoms/Grid/Grid';
import logo from '../../../assets/Images/logo-github.png';

const HeaderContainer = styled.header `
    width:100%;
    height: 72px;
    background-color: #465A65;
    color: #FFF;
	/* position: fixed; */
	/* margin-bottom:30px; */
    top: 0;
    transform: translateY(-100%);
    transition: transform .3s cubic-bezier(.4,0,.6,1),opacity 0s .3s;
    box-shadow: 0 2px 4px rgba(0,0,0,.5);
    z-index: 4;
    opacity: 1;
    transform: translateY(0);
    transition: transform .3s cubic-bezier(.4,0,.2,1) .3s,opacity 0s .3s;
    text-align: center;
`
const Image = styled.img `
    padding: 10px;
    height: 70px;
    background-color: none;
`

export default class Header extends Component {
  render() {
    return (
		<HeaderContainer>
			<Container>
        <Row>
          <Column>
              <Image src={logo} alt="GitHub"/>
          </Column>
        </Row>
			</Container>
		</HeaderContainer>
    );
  }
}
