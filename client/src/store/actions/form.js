import * as actionTypes from "./actionTypes";
import axios from "axios";

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/addSurvey", values);

  history.push("/surveys");
  dispatch({ type: actionTypes.FETCH_USER, payload: res.data });
};
