import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Row, Column } from '../atoms/Grid';
import Card from '../molecules/Card';
import { api } from '../../api/githubAPI';
import axios from 'axios';
import { ListItem } from '../molecules/SimpleList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Text from '../atoms/Text';

const ImageUser = styled.img`
     width: 100%;
     max-width: 250px;
}
`
const Container = styled.div`
  padding: 25px 35px 15px 35px;
`
const ColumnUserInfo = styled(Column)`
  flex:3;
  padding: 0 0 0 30px;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
  @media only screen and (min-width: 768px) {
    padding: 0 0 0 30px;
  }
`
const ListRepos = styled(ListItem)`
  flex-direction: column;
  -webkit-align-items: start;
  -webkit-box-align: start;
  -ms-flex-align: center;
  align-items: start;
`

const ContainerText = styled.div`
    margin-bottom: 15px;
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
                <ContainerText><Text fontSize="26px">{this.state.userInfo.name}</Text></ContainerText>
                <ContainerText><Text fontSize="15px"><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /></Text><Text margin="0 0 0 5px">{this.state.userInfo.location}</Text></ContainerText>
                <ContainerText><Text fontSize="17px" fontWeight="300">{this.state.userInfo.bio}</Text></ContainerText>
              </ColumnUserInfo>
            </Row>
          </Container>
        </Card>

        <Card title="Repositórios">
          <Container>
            <div><Text size="small">Tamanho total:&nbsp;</Text><Text size="medium" fontWeight="400">{this.state.repoTotalSize}</Text><Text>&nbsp;Bytes</Text></div>
            <div><Text size="small">Issues abertos:&nbsp;</Text><Text size="medium" fontWeight="400">{this.state.repoTotalIssues} </Text></div>
            <div><Text size="small">Linguagens:&nbsp;</Text><Text size="medium" fontWeight="400"></Text></div>
          </Container>
          {
            this.state.UserRepos.map((repos, i) => {
              return (
                <ListRepos key={i} >
                  <div><Text size="large">{repos.name}</Text></div>
                  <div><Text type="p" size="small" margin="15px 0">{repos.description}</Text></div>
                  <div><Text size="small">Tamanho:&nbsp;</Text><Text size="medium" fontWeight="400">{repos.size} bytes</Text></div>
                  <div><Text size="small">Linguagem:&nbsp;</Text><Text size="medium" fontWeight="400">{repos.language}</Text></div>
                  <div><Text size="small">Issues abertos:&nbsp;</Text><Text size="medium" fontWeight="400">{repos.open_issues_count}</Text></div>
                </ListRepos>
              )
            })
          }
        </Card>

      </Fragment>
    );
  }

}

