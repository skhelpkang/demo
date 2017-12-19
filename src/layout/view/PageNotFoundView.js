
import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';


class PageNotFoundView extends Component {
  //
  render() {
    //
    return (
      <Container text={true}>
        <Header as="h1">{'NOT FOND'}</Header>
        <p>{'페이지를 찾을수 없어요'}</p>
      </Container>
    );
  }
}

export default PageNotFoundView;
