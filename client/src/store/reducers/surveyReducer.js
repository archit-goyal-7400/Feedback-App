import * as actionTypes from "../actions/actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SURVEYS:
      state = action.payload;
      return state;
    default:
      // console.log(state);
      return state;
  }
};
export default reducer;
