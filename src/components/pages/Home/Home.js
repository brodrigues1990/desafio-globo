import React, { Fragment } from 'react';
import Card from '../../atoms/Card/Card';
import SimpleList from '../../molecules/SimpleList/SimpleList';
import Search from '../../molecules/Search/Search';
  

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Fragment>
          <Card title="Usuários">
            <Search/> 
            <SimpleList/>
          </Card>
      </Fragment>
    );
  }

}


