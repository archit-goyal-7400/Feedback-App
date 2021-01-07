import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuth: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      // console.log(state);
      return state;
  }
};
export default reducer;
