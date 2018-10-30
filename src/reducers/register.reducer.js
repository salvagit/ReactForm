import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from "../actions/types";

const INITIAL_STATE = {
  isLoading: false,
  success: false,
  error: null,
  data: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {

    case REGISTER_START:
      return { ...state, isLoading: true };
    case REGISTER_SUCCESS:
      return { ...state, success: true, data: action.data, isLoading: false };
    case REGISTER_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}