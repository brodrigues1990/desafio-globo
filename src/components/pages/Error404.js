import React, { Component, Fragment } from 'react';
import Card from '../molecules/Card';
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

export default class Error404 extends React.Component {
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