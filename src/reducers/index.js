import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import provinces from "./provinces.reducer";

export default combineReducers({
  form,
  provinces
});