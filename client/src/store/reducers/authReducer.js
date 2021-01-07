import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuth: null,
  credits: 0,
};

const reducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return {
        ...state,
        isAuth: action.payload.googleId,
        credits: action.payload.credits,
      };
    default:
      // console.log(state);
      return state;
  }
};
export default reducer;
