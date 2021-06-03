import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchSurveys = () => {
  return (dispatch) => {
    axios
      .get("/api/getSurveys")
      .then((res) => {
        return dispatch({ type: actionTypes.FETCH_SURVEYS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
