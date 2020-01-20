import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width:100%;
    background-color: #FFF;
    top: 0;
    transform: translateY(-100%);
    transition: transform .3s cubic-bezier(.4,0,.6,1),opacity 0s .3s;
    box-shadow: 0 2px 4px rgba(0,0,0,.5);
    z-index: 4;
    opacity: 1;
    transform: translateY(0);
    transition: transform .3s cubic-bezier(.4,0,.2,1) .3s,opacity 0s .3s;
`
const CardTitle = styled.h3`
    display: block;
    line-height: 32px;
    font-size: 25px;
    font-weight: 300;
    padding: 15px 0;
    background: #f5f5f5;
`

export const CardContainer = styled.div`
    padding: 0 35px;
`

const CardContent = styled.div`
    margin: 0 0 25px 0;
`

export default props => (

    <Card>
        <CardTitle>
            <CardContainer>{props.title}</CardContainer>
        </CardTitle>
        <CardContent>
            {props.children}
        </CardContent>
    </Card>

)
