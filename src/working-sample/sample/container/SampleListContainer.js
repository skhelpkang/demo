
import React, { Component } from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import sampleAction  from '../action/sampleAction'
import SampleListView from '../view/SampleListView'


class SampleListContainer extends Component {
  
  constructor(props) {
    super(props)
    autoBind(this)
  }


  // @Override
  componentWillMount(){
    this.props.sampleAction.findSampleList()
  }


  render() {
    //
    const { sampleState } = this.props
    const {list} = sampleState
    if(!list || !list.content) return null;
    return (
      <SampleListView
        list = {list.content}
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

export default connect(mapStateToProps, mapDispatchToProps)(SampleListContainer)

