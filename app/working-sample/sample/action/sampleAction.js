
import sampleApi from '../api/sampleApi'

import actionType from "../reducer/sampleActionType"

const  {
  SET_SAMPLE,
  SET_SAMPLE_LIST,
} = actionType


function findSampleList(pageName) {

  return async (dispatch) => {
    const sampleContents = await sampleApi.findSampleList(pageName)
    dispatch({
      type: SET_SAMPLE_LIST,
      payload: sampleContents,
    })
  }

}

function findSample(sampleId) {

  return async (dispatch) => {
    const sampleContent = await sampleApi.findSample(sampleId)
    dispatch({
      type: SET_SAMPLE,
      payload: sampleContent,
    })
  }

}


export default { 
  findSample, 
  findSampleList,
}
