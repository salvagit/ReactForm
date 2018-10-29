import {
  GET_PROVINCES_START,
  GET_PROVINCES_SUCCESS,
  GET_PROVINCES_ERROR,
  GET_LOCALITY_START,
  GET_LOCALITY_SUCCESS,
  GET_LOCALITY_ERROR
} from "../actions/types";

const INITIAL_STATE = {
  isLoading: false,
  success: false,
  error: null,
  provinces: {},
  locality: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {

    case GET_PROVINCES_START:
      return { ...state, isLoading: true };
    case GET_PROVINCES_SUCCESS:
      return { ...state, success: true, provinces: action.data, isLoading: false };
    case GET_PROVINCES_ERROR:
      return { ...state, isLoading: false };

    case GET_LOCALITY_START:
      return { ...state, isLoading: true };
    case GET_LOCALITY_SUCCESS:
      return { ...state, success: true, locality: action.data, isLoading: false };
    case GET_LOCALITY_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}