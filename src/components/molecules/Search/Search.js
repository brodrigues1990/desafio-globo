import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';
import githubAPI, { api } from '../../../services/githubAPI';
import axios from 'axios';

const SearchForm = styled.div`
    display: flex;
`
const SearchInput = styled.input`
    margin: 0;
    padding: 15px 70px 15px 35px;
    width: 100%;
    border: 0;
    font-size: 20px;
    font-weight: 300;
`
const SearchButton = styled.div`
    padding: 20px 25px;
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
        axios.get(api.baseUrl + "/users/" + this.input.value)
        .then(res => {
            if (this.input.value) {
                history.push({
                    pathname: `/user/`+this.input.value,
                    // search: this.input.value
                });
            }
        }).catch(function (error) {
            switch (error.response.status) {
              case 404 :
                  alert("nao encontrado");
                  //props.history.push('/503') //we will redirect user into 503 page 
                  break
              default :
                  console.log(error);
                  break
          }
        })

        
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