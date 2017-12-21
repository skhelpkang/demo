
import sampleApi from '../api/sampleApi'

import actionType from "../reducer/sampleActionType"

const  {
  SET_SAMPLE_CONTENT,
  SET_SAMPLE_TITLE,
  SET_SAMPLE_TEXT,
  SET_SAMPLE_LIST,
} = actionType


function findSampleList(pageName) {

  return async (dispatch) => {
    const sampleContent = await sampleApi.findSampleList(pageName)
    dispatch({
      type: SET_SAMPLE_LIST,
      payload: sampleContent,
    })
  }

}

function findSampleContent(pageName) {

  return async (dispatch) => {
    const sampleContent = await sampleApi.findSampleContent(pageName)
    dispatch({
      type: SET_SAMPLE_CONTENT,
      payload: sampleContent,
    })
  }

}

async function setSampleTitle(sampleTitle) {

  return {
    type: SET_SAMPLE_TITLE,
    payload: {
      sampleTitle: sampleTitle,
    },
  }
}

async function setSampleText(sampleText) {

  return {
    type: SET_SAMPLE_TEXT,
    payload: {
      sampleText: sampleText,
    },
  }
}

export default { 
  findSampleContent, 
  setSampleTitle,  
  setSampleText,
  findSampleList,
}
