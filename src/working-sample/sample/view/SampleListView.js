
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Header } from 'semantic-ui-react'


export default class SampleListView extends Component {
  //
  static propTypes = {
    list: PropTypes.array.isRequired,
  }

  render() {
    //
    const { list } = this.props

    return (
      <Container text={true}>
        <Header as="h1">리스트</Header>
        {
          list.map(({
            sampleId,
            title,
            body,
          }) => {
            return (
              <div key={sampleId}>
                <div>{title}</div>
                <div>{body}</div>
              </div>
            )

          })
        }

      </Container>
    )
  }
}
