import React, { Fragment } from 'react';
import Card from '../molecules/Card';
import SimpleList from '../molecules/SimpleList';
import Search from '../molecules/Search';
import { api } from '../../api/githubAPI';
import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: []
    }
  }

  componentDidMount() {
    axios.get(api.baseUrl + "/users")
      .then(res => {
        console.log(res.data);
        this.setState({ usersList: res.data });
      })
  }

  render() {
    console.log(this.state.usersList);
    return (
      <Fragment>
        <Card title="Usuários">
          <Search />
          <SimpleList users={this.state.usersList} />
        </Card>
      </Fragment>
    );
  }

}


