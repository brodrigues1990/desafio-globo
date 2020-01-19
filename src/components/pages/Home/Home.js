import React, { Fragment } from 'react';
import Card from '../../atoms/Card/Card';
import SimpleList from '../../molecules/SimpleList/SimpleList';
import Search from '../../molecules/Search/Search';
import axios from 'axios';

const api = {
  baseUrl: "https://api.github.com",
  client_id: "c83a49f801e6291e9ee1",
  client_secret: "7ccae496ed4d3fb835f3f9b4d4da6064cad3f1c3"
}
// +api.client_id+"&"+api.client_secret

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: []
    }
  }
  componentDidMount() {
    axios.get(api.baseUrl+"/users")
      .then(res => {
        console.log(res.data);
        this.setState({ usersList: res.data });
      })
  }

  render () {
    return (
      <Fragment>
          <Card title="Usuários">
            <Search/> 
            <SimpleList users={this.state.usersList}/>
          </Card>
      </Fragment>
    );
  }

}


