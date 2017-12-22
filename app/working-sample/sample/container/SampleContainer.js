
import React, { Component } from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import sampleAction from '../action/sampleAction'
import SampleView from '../view/SampleView'


class SampleContainer extends Component {
  //
  constructor(props) {
    super(props)
    autoBind(this)
  }


  // @Override
  componentWillMount() {
    const { props } = this
    const { sampleId } = this.props.params
    props.sampleAction.findSample(sampleId)
  }

  render() {
    const { sample } = this.props.sampleState
    if (!sample) return null
    const { sampleId, title, body } = sample
    return (
      <SampleView
        {
         ...{sampleId, title, body}
       }
      />
    )
  }
}

const mapStateToProps = ({ sampleState }) => {
  return {
    sampleState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sampleAction: bindActionCreators(sampleAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer)

