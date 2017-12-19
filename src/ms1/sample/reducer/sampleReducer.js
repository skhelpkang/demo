import actionType from "./sampleActionType"

const {
  SET_SAMPLE_CONTENT,
  SET_SAMPLE_TITLE,
  SET_SAMPLE_TEXT,
} = actionType

const initialState = {
  title: null,
  text: null,
};


function reducer(state = initialState, action) {
  //
  return sampleReducer(state, action)

}


function sampleReducer(state, { type, payload }) {
  switch (type) {
    case SET_SAMPLE_CONTENT:
      return { ...state, ...payload }
    case SET_SAMPLE_TITLE:
      return { ...state, title: payload }
    case SET_SAMPLE_TEXT:
      return { ...state, text: payload }
    default:
      return state;
  }
}

export default reducer