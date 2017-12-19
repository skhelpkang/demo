
import { actionType } from '../reducer/sampleReducer';
import sampleApi from '../api/sampleApi';

const {
  SET_SAMPLE_CONTENT,
  SET_SAMPLE_TITLE,
  SET_SAMPLE_TEXT,
} = actionType



//
function findSampleContent(pageName) {
  //
  return async (dispatch) => {
    const sampleContent = await sampleApi.findSampleContent(pageName)
    dispatch({
      type: SET_SAMPLE_CONTENT,
      payload: sampleContent,
    });
  }

}

function setSampleTitle(sampleTitle) {
  //
  return {
    type: SET_SAMPLE_TITLE,
    payload: {
      sampleTitle: sampleTitle,
    },
  };
}

function setSampleText(sampleText) {
  //
  return {
    type: SET_SAMPLE_TEXT,
    payload: {
      sampleText: sampleText,
    },
  };
}


export default { 
  findSampleContent, 
  setSampleTitle,  
  setSampleText,
}

export { sampleAction }
