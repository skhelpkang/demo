
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Header } from 'semantic-ui-react'


class SampleView extends Component {
  //
  static propTypes = {
    sampleId: PropTypes.number, 
    title: PropTypes.string, 
    body: PropTypes.string,
    
  }

  render() {
    //
    const { sampleId, title, body } = this.props

    return (
      <Container text={true}>
        <Header as="h1">{title}</Header>
        <p>{body}</p>
      </Container>
    )
  }
}

export default SampleView
