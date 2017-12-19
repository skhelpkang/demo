

const actionType = {
  //
  SET_SAMPLE_CONTENT: 'sample.setSampleContent',
  SET_SAMPLE_TITLE: 'sample.setSampleTitle',
  SET_SAMPLE_TEXT: 'sample.setSampleText',
};

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
    case actionType.SET_SAMPLE_CONTENT:
      return { ...state, ...payload }
    case actionType.SET_SAMPLE_TITLE:
      return { ...state, title: payload }
    case actionType.SET_SAMPLE_TEXT:
      return { ...state, text: payload }
    default:
      return state;
  }
}


export default reducer;
export { actionType, reducer };
