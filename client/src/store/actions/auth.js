import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchUser = () => {
  return (dispatch) => {
    axios
      .get("/api/current_user")
      .then((res) => {
        dispatch({
          type: actionTypes.FETCH_USER,
          payload: res.data || { googleId: false, credit: 0 },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const handlePayments = (token) => {
  return (dispatch) => {
    axios
      .post("/api/stripe", token)
      .then((res) => {
        dispatch({
          type: actionTypes.FETCH_USER,
          payload: res.data || { googleId: false, credit: 0 },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
