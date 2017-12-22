import actionType from "./sampleActionType"

const {
  SET_SAMPLE,
  SET_SAMPLE_LIST,
} = actionType

const initialState = {
  sample: null,
  sampleList: null,
}


function reducer(state = initialState, action) {
  //
  return {
    sample: sampleReducer(state, action),
    sampleList: sampleListReducer(state, action),
  }

}


function sampleListReducer(state, { type, payload }) {
  switch (type) {
    case SET_SAMPLE_LIST:
      return  payload
    default:
      return state.sampleList
  }
}

function sampleReducer(state, { type, payload }) {
  switch (type) {
    case SET_SAMPLE:
      return  payload
    default:
      return state.sample
  }
}

export default reducer