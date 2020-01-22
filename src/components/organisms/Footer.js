import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from '../atoms/Grid';
import Text from '../atoms/Text';

const FooterContainer = styled.footer`
    width:100%;
    height: 40px;
    background-color: none;
    text-align: center;
    bottom:0;
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
                            <LinkDeveloper target="_blank" rel="author" href="https://github.com/brodrigues1990">
                                <Text fontSize="12px">Desenvolvido por </Text><Text color="#00AEEF" fontSize="17px" fontFamily="'Caveat', cursive">Bruno Rodrigues</Text>
                            </LinkDeveloper>
                        </Column>
                    </Row>
                </Container>
            </FooterContainer>
        );
    }
}
