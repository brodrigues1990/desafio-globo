import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';

const SearchForm = styled.div`
    display: flex;
`
const SearchInput = styled.input`
    margin: 0;
    padding: 15px 70px 15px 20px;
    width: 100%;
    border: 0;
    font-size: 20px;
    font-weight: 300;
`
const SearchButton = styled.div`
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
class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    handleInputRef = (input) => {
        this.input = input;
    };

    SearchUserClick = () => {

        let { history } = this.props;
        if (this.input.value) {
            history.push({
                pathname: `/user/`+this.input.value,
                // search: this.input.value
            });
        }
    }

    render() {
        return (

            <SearchForm onSubmit={this._handleSubmit}>
                <SearchInput type="text" name="user" ref={this.handleInputRef} placeholder="Buscar usuário" />
                <SearchButton onClick={this.SearchUserClick.bind(this)}><FontAwesomeIcon icon={faSearch} size="lg" /></SearchButton>
            </SearchForm>
        );
    }
};

export default withRouter(Search);