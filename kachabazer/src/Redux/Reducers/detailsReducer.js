import {
    REQUEST_LOADING,
    REQUEST_SUCCESS,
    REQUEST_FAILED,
  } from "../constants/types";
  
  const initialState = {
    loading: false,
    detailsProducts: [],
    error: "",
  };
  
  const detailsProducts = (state = initialState, { type, payload }) => {
    switch (type) {
      case REQUEST_LOADING:
        return {
          ...state,
          loading: true,
        };
      case REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          detailsProducts: payload,
        };
      case REQUEST_FAILED:
        return {
          ...state,
          loading: false,
          error: payload,
        };
      default:
        return state
    }
  };
  
  export default detailsProducts;