import {
  REQUEST_LOADING,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
} from "../constants/types";
import axios from "axios";
const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: REQUEST_LOADING,
    });
    const res = await axios.get(
      "https://raw.githubusercontent.com/isti2623/fake-data/main/product.json?fbclid=IwAR1bQgoOVMs8mObh-IL_PGaReSX-JEf9B1i02IL8uivthYwFaIF2lZ2emg4"
    );
    dispatch({
      type: REQUEST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REQUEST_FAILED,
      payload: error.message,
    });
  }
};

export default getProducts;
