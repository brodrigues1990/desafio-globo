import React, { Fragment } from 'react';
import Header from '../../organisms/Header/Header';
import styled from 'styled-components';
import { Container } from '../../atoms/Grid/Grid';
import Card from '../../molecules/Card/Card';
import { api } from '../../../services/githubAPI';
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
      userData: []
    }
  }

  componentDidMount() {
    axios.get(api.baseUrl + "/users/" + this.state.userLogin)
      .then(res => {
        console.log(res.data);
        this.setState({ userData: res.data });
      })
  }

  render() {
    console.log(this.state.userData.avatar_url);
    return (
      <Fragment>

        <Card title={this.state.userLogin}>
          <ImageUser src={this.state.userData.avatar_url} />


        </Card>

      </Fragment>
    );
  }

}


