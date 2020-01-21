import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from '../../atoms/Grid/Grid';

const FooterContainer = styled.footer`
    width:100%;
    height: 40px;
    background-color: none;
    text-align: center;
    bottom:0;
    font-size: 12px;
`
const TextDeveloperName = styled.span`
    font-family: 'Caveat', cursive; 
    font-size: 17px;
    color: #00AEEF;
`
const LinkDeveloper = styled.a`
    color: #465A65;
    font-weight: 200;
`

export default class Header extends Component {
    render() {
        return (
            <FooterContainer>
                <Container>
                    <Row>
                        <Column>
                            <LinkDeveloper target="_blank" href="https://github.com/brodrigues1990">Desenvolvido por <TextDeveloperName>Bruno Rodrigues</TextDeveloperName></LinkDeveloper>
                        </Column>
                    </Row>
                </Container>
            </FooterContainer>
        );
    }
}
