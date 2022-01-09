import {
  FEATURED_LOADING,
  FEATURED_SUCCESS,
  FEATURED_FAILED,
} from "../constants/types";

const initialState = {
  loading: false,
  featureds: [],
  error: "",
};

const featuredReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FEATURED_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FEATURED_SUCCESS:
      return {
        ...state,
        loading: false,
        featureds: payload,
      };
    case FEATURED_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default featuredReducer;
