import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

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


export default function ButtonBack() {
    let match = useRouteMatch("/");
    if (!match.isExact) {
        return (
            
            <Link to="/"  >
                <ButtonBack>
                        <FontAwesomeIcon icon={faArrowLeft} size="lg"/>  
                        <TextButtonBack>Voltar</TextButtonBack>
                </ButtonBack>
            </Link>
            
        )
    } else {
        return null;
    }
}