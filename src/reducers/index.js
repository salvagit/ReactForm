import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import provinces from "./provinces.reducer";
import register from "./register.reducer";

export default combineReducers({
  form,
  provinces,
  register
});