import React, { Fragment } from 'react';
import Header from '../../organisms/Header/Header';
import styled from 'styled-components';
import { Row, Column } from '../../atoms/Grid/Grid';
import Card from '../../molecules/Card/Card';
import useGetApi, { api } from '../../../services/githubAPI';
import axios from 'axios';
import { ListItem } from '../../molecules/SimpleList/SimpleList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ImageUser = styled.img`
     width: 200px;
`
const Container = styled.div`
  padding: 25px 35px 15px 35px;
`
const ColumnUserInfo = styled(Column)`
  flex:3;
`
const ListRepos = styled(ListItem)`
  flex-direction: column;
  -webkit-align-items: start;
  -webkit-box-align: start;
  -ms-flex-align: center;
  align-items: start;
`

const ContainerText = styled.div`
    margin-bottom: 5px;
`
const Text = styled.span`
    color: #465A65;
    font-weight: 300;
    height:15px;
`
const Text1 = styled(Text)`
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 15px; 
`
const Text2 = styled(Text)`
    font-size: 21px;
`
const Text3 = styled(Text)`
    font-size: 17px;
`
const Text4 = styled(Text)`
    font-size: 15px;
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
    // const users = useGetApi('user', this.state.userLogin);
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
        //Object.values(allLanguages);
        console.log(JSON.stringify(allLanguages));
        //allLanguages.filter(allLanguages)
        // const unique = [...new Set(allLanguages)];
        // console.log(unique);

        //Cria variavel fazendo a soma de todas as issuees abertas
        let totalIssues = res.data.reduce((total, valor) => total + valor.open_issues_count, 0);
        this.setState({ repoTotalIssues: totalIssues });
      })
  }

  render() {
    return (
      <Fragment>

        <Card title={this.state.userLogin}>

          <Container>
            <Row>
              <Column>
                <ImageUser src={this.state.userInfo.avatar_url} />
              </Column>
              <ColumnUserInfo>
                <ContainerText><Text1>{this.state.userInfo.name}</Text1></ContainerText>
                <ContainerText><Text2>{this.state.userInfo.bio}</Text2></ContainerText>
                <ContainerText><Text4><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /> {this.state.userInfo.location}</Text4></ContainerText>
              </ColumnUserInfo>
            </Row>
          </Container>
        </Card>

        <Card title="Repositórios">
          <Container>
            <div><Text3>Tamanho total:&nbsp;</Text3><Text2>{this.state.repoTotalSize}</Text2><Text3>&nbsp;Bytes</Text3></div>
            <div><Text3>Issues abertos:&nbsp;</Text3><Text2>{this.state.repoTotalIssues} </Text2></div>
            <div><Text3>Linguagens:&nbsp;</Text3><Text2></Text2></div>
          </Container>

          {
            this.state.UserRepos.map((repos, i) => {
              return (

                <ListRepos key={i} >
                  <div><Text2>{repos.name} </Text2></div>
                  <div><Text3>descricao:&nbsp;</Text3><Text3>{repos.name}</Text3></div>
                  <div><Text3> tamanho:&nbsp;</Text3><Text3>{repos.size}</Text3></div>
                  <div><Text3>linguagem:&nbsp;</Text3><Text3>{repos.language}</Text3></div>
                  <div><Text3>issues abertos:&nbsp;</Text3><Text3>{repos.open_issues_count}</Text3></div>
                </ListRepos>



              )
            })
          }
        </Card>
      </Fragment>
    );
  }

}

