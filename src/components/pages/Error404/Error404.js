import React, { Component, Fragment } from 'react';
import Card from '../../molecules/Card/Card';
import { useLocation } from "react-router-dom";

function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <h3>
        Nenhum resultado para <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Card title="Error">
          <NoMatch />
        </Card>
      </Fragment>
    );
  }

}