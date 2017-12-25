
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { browserHistory as history } from "react-router"
import { Container, Header } from 'semantic-ui-react'

import { Card, Icon } from 'semantic-ui-react'



export default class SampleListView extends Component {

  static propTypes = {
    list: PropTypes.array.isRequired,
  }


  render() {
    const { list } = this.props

    return (
      <Container text={true}>
        <Header as="h1">리스트</Header>
        {
          list.map(
            sample => <SampleItem {...sample} key={sample.sampleId} />
          )
        }
      </Container>
    )
  }
}


const SampleItem = ({
  sampleId,
  title,
  body,
}) => (
  <Card key={sampleId}
    onClick={() => history.push(`/workingSample/sample/${sampleId}`)}
  >
    <Card.Content header={title} className="hand" />
    <Card.Content description={body} />
    <Card.Content extra>
      <Icon name='user' /> 샘플 아이디 {sampleId}로 이동
    </Card.Content>
  </Card>

)




