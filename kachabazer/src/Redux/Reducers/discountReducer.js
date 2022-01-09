import {
  REQUEST_LOADING,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
} from "../constants/types";

const initialState = {
  loading: false,
  discountProducts: [],
  error: "",
};

const discountReducer = (state = initialState, { type, payload }) => {
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
        discountProducts: payload,
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

export default discountReducer;