import React, { Fragment } from 'react';
import Card from '../../atoms/Card/Card';
import SimpleList from '../../molecules/SimpleList/SimpleList';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Fragment>
          <Card title="Aluno">
            <SimpleList/>
          </Card>
      </Fragment>
    );
  }

}


