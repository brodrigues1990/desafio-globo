import React, { Fragment } from 'react';
import Loading from '../atoms/loader';
import Card from '../molecules/Card';
import SimpleList from '../molecules/SimpleList';
import Search from '../molecules/Search';
import { api } from '../../api/githubAPI';
import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      loading: true
    }
  }

  componentDidMount() {
    axios.get(api.baseUrl)
      .then(res => {
        this.setState({ usersList: res.data, loading: false });
      })
  }

  render() {
    const { loading } = this.state;
    return (
      <Fragment>
        <Card title="Usuários">
          <Search />
          {loading ? <Loading /> : <SimpleList users={this.state.usersList} />}
        </Card>
      </Fragment>
    );
  }

}


