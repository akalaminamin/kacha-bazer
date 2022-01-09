import {
  REQUEST_LOADING,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
} from "../constants/types";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const productReducer = (state = initialState, { type, payload }) => {
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
        products: payload,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default productReducer;