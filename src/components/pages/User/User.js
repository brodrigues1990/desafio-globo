import React, { Fragment } from 'react';
import Header from '../../organisms/Header/Header';
import styled from 'styled-components';
import { Container } from '../../atoms/Grid/Grid';
import Card from '../../molecules/Card/Card';
import githubAPI, { api } from '../../../services/githubAPI';
import axios from 'axios';

const ImageUser = styled.img`
     width: 100px;
`

export default class User extends React.Component {
  constructor(props) {
    super(props);
    let username = props.match.params.username;
    this.state = {
      userLogin: username,
      userInfo: [],
      repoTotalSize: 0,
      repoTotalIssues: 0,
      UserRepos: []
    }
  }

  componentDidMount() {
    // const users = githubAPI('user', props.match.params.id);
    // console.log(users);
    axios.get(api.baseUrl + "/users/" + this.state.userLogin)
      .then(res => {
        // console.log(res.data);
        this.setState({ userInfo: res.data });
      })
    axios.get(api.baseUrl + "/users/" + this.state.userLogin + "/repos")
      .then(res => {
        this.setState({ UserRepos: res.data });

        //Cria variavel fazendo a soma de todos os tamanhos de repositorios em bytes
        let totalSize = res.data.reduce((total, valor) => total + valor.size, 0);
        this.setState({ repoTotalSize: totalSize });

        //Criar variavel pegando todas linguagens 
        let allLanguages = res.data.map(e => e.language).join(",");
        Object.values(allLanguages);
        console.log(allLanguages);
        //allLanguages.filter(allLanguages)
        const unique = [...new Set(allLanguages)];
        console.log(unique);

        //Cria variavel fazendo a soma de todas as issuees abertas
        let totalIssues = res.data.reduce((total, valor) => total + valor.open_issues_count, 0);
        this.setState({ repoTotalIssues: totalIssues });
      })
  }

  render() {
    return (
      <Fragment>

        <Card title={this.state.userLogin}>
          <ImageUser src={this.state.userInfo.avatar_url} />

          nome:{this.state.userInfo.name}<br />
          bio:{this.state.userInfo.bio}<br />
          localidade{this.state.userInfo.location}<br />
        </Card>

        <Card title="Repositório">

          Tamanho total(soma):{this.state.repoTotalSize}  <br />
          Linguagens   <br />
          Issues abertos:  {this.state.repoTotalIssues}  <br /><br />
          <ul>
          {
            this.state.UserRepos.map((repos, i) => {
              return (

                
                  <li key={i}>
                    nome do repositorio: {repos.name} <br />
                    descricao : {repos.name} <br />
                    tamanho:  {repos.size} <br />
                    linguagem:  {repos.language} <br />
                    issues abertos:  {repos.open_issues_count} <br /><br /><br />
                  </li>
                

              )
            })
          }
          </ul>
        </Card>



      </Fragment>
    );
  }

}


