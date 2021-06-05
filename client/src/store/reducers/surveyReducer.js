import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SURVEYS:
      const newState = {
        data: action.payload,
      };
      return newState;
    default:
      // console.log(state);
      return state;
  }
};
export default reducer;
