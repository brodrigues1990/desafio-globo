import React, { useState, useEffect } from 'react';
import { api } from '../../services/githubAPI';
import styled from 'styled-components';
import Text from '../atoms/Text';
import Card from '../molecules/Card';
import { Row, Column } from '../atoms/Grid';
import { ListItem } from '../molecules/SimpleList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ImageUser = styled.img`
     width: 100%;
     max-width: 250px;
     border-radius: 4px;
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
const ChipsLanguages = styled.div`
    display: inline-block;
    height: 32px;
    font-size: 13px;
    font-weight: 500;
    color: rgba(0,0,0,0.6);
    line-height: 32px;
    padding: 0 12px;
    border-radius: 16px;
    background-color: #e4e4e4;
    margin-bottom: 5px;
    margin-right: 5px;
`
const ConTextReposStats = styled.div`
    margin-bottom: 15px;
`

const User = (props) => {

  const [userLogin, setUserLogin] = useState(props.match.params.username);
  const [userInfo, setUserInfo] = useState([]);
  const [repoTotalSize, setRepoTotalSize] = useState(0);
  const [repoTotalIssues, setRepoTotalIssues] = useState(0);
  const [languages, setLanguages] = useState([]);
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    //Search user information
    api.get(`users/${userLogin}`)
      .then(res => {
        setUserInfo(res.data);
      })

    //Search user repository information
    api.get(`users/${userLogin}/repos`)
      .then(res => {
        setUserRepos(res.data);

        //Cria variavel fazendo a soma de todos os tamanhos de repositorios em bytes
        let totalSize = res.data.reduce((total, valor) => total + valor.size, 0);
        setRepoTotalSize(totalSize);

        //Criar variavel pegando todas linguagens 
        let lgs = res.data.reduce((l, i) => {
          if (l.indexOf(i.language) === -1) { l.push(i.language); }
          return l;
        }, []);
        setLanguages(lgs);

        //Cria variavel fazendo a soma de todas as issuees abertas
        let totalIssues = res.data.reduce((total, valor) => total + valor.open_issues_count, 0);
        //this.setState({ repoTotalIssues: totalIssues });
        setRepoTotalIssues(totalIssues);
      })
  }, []);


  return (
    <>

      <Card title={userLogin}>
        <Container>
          <Row>
            <Column>
              <ImageUser src={userInfo.avatar_url} />
            </Column>
            <ColumnUserInfo>
              <ContainerText><Text fontSize="26px">{userInfo.name}</Text></ContainerText>
              <ContainerText><Text fontSize="15px"><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /></Text><Text margin="0 0 0 5px">{userInfo.location}</Text></ContainerText>
              <ContainerText><Text fontSize="17px" fontWeight="300">{userInfo.bio}</Text></ContainerText>
            </ColumnUserInfo>
          </Row>
        </Container>
      </Card>

      <Card title="Repositórios">
        <Container>
          <ConTextReposStats><Text size="small">Tamanho total:&nbsp;</Text><Text size="medium" fontWeight="400">{repoTotalSize}</Text><Text>&nbsp;Bytes</Text></ConTextReposStats>
          <ConTextReposStats><Text size="small">Issues abertos:&nbsp;</Text><Text size="medium" fontWeight="400">{repoTotalIssues} </Text></ConTextReposStats>
          <ConTextReposStats><Text size="small">Linguagens:&nbsp;</Text >
            {
              languages.map((language, i) => {
                if (language) {
                  return (
                    <ChipsLanguages>
                      <Text size="small" fontWeight="400">{language} </Text>
                    </ChipsLanguages>
                  )
                }
              })
            }
          </ConTextReposStats>
        </Container>
        {
          userRepos.map((repos, i) => {
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

    </>
  );

}

export default User;