import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

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
                <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                <TextButtonBack>Voltar</TextButtonBack>
            </ButttonBack>
        )
    } else {
        return (
            <ContainerButttonBack />
        )
    }
}

export default ButtonBack;