import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from "./types";

import { push } from "connected-react-router";

// Register
export const onRegisterStart = () => ({ type: REGISTER_START });
export const onRegisterSuccess = data => ({ type: REGISTER_SUCCESS, data });
export const onRegisterError = error => ({ type: REGISTER_ERROR, error });

export function register() {
  return dispatch => {
    dispatch(onRegisterStart());
    fetch("http://www.mocky.io/v2/5bd736483500002f3ffd8008", { method: "POST" })
    .then(data => data.json())
    .then(data => {
      if (data.success) {
        dispatch(onRegisterSuccess(data));
        dispatch(push("/home"));
      }
    })
    .catch(error => dispatch(onRegisterError(error)));
  };
}