import React, { Fragment } from 'react';
import Card, {CardContainer} from '../molecules/Card';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import Text from '../atoms/Text';

const ErrorContainer = styled.footer`
    padding:25px 35px;
`

function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <Text>
        Nenhum resultado para <code>{location.pathname}</code>
      </Text>
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
        <Card title="Erro 404">
          <ErrorContainer>
            <NoMatch />
          </ErrorContainer>
        </Card>
      </Fragment>
    );
  }

}