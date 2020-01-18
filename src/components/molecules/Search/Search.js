import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const SearchContainer = styled.div `
    display: flex;
`
const SearchInput = styled.input `
    margin: 0;
    padding: 15px 70px 15px 20px;
    width: 100%;
    border: 0;
    font-size: 20px;
    font-weight: 300;
`
const SearchButton = styled.div `
    padding: 15px 20px 15px 20px;
    cursor:pointer;
    color:#465A65;
    &:hover {
        background: #465a65e3;
        color:#FFF;
        
    }
    &:active {
        -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    }
`

export default props => (
  
    <SearchContainer>
        <SearchInput type="text" name="user" placeholder="Buscar"/>
        <SearchButton><FontAwesomeIcon icon={faSearch} size="lg"/></SearchButton>
    </SearchContainer> 
    
)


