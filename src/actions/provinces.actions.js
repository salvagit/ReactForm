import {
  GET_PROVINCES_START,
  GET_PROVINCES_SUCCESS,
  GET_PROVINCES_ERROR,
  GET_LOCALITY_START,
  GET_LOCALITY_SUCCESS,
  GET_LOCALITY_ERROR
} from "./types";

// Get
export const onGetProvincesStart = () => ({ type: GET_PROVINCES_START });
export const onGetProvincesSuccess = data => ({ type: GET_PROVINCES_SUCCESS, data });
export const onGetProvincesError = error => ({ type: GET_PROVINCES_ERROR, error });

// Get
export const onGetLocalityStart = () => ({ type: GET_LOCALITY_START });
export const onGetLocalitySuccess = data => ({ type: GET_LOCALITY_SUCCESS, data });
export const onGetLocalityError = error => ({ type: GET_LOCALITY_ERROR, error });

export function getProvinces() {
  return dispatch => {
    dispatch(onGetProvincesStart());
    fetch("https://geopagos-challenge.s3.amazonaws.com/provinces.json")
    .then(data => data.json())
    .then(data => {
      dispatch(onGetProvincesSuccess(data));
    })
    .catch(error => dispatch(onGetProvincesError(error)));
  };
}

export function getLocality(id = null) {
  return dispatch => {
    dispatch(onGetLocalityStart());
    if (!id) return false;
    fetch(`https://geopagos-challenge.s3.amazonaws.com/provinces/${id}.json`)
    .then(data => data.json())
    .then(data => {
      dispatch(onGetLocalitySuccess(data));
    })
    .catch(error => dispatch(onGetLocalityError(error)));
  };
}