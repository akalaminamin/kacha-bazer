import axios from "axios";
import {
    FEATURED_LOADING,
    FEATURED_SUCCESS,
    FEATURED_FAILED,
} from "../constants/types";

const featuredAction = () => async (dispatch) => {
  try {
    dispatch({
      type: FEATURED_LOADING,
    });
    const res = await axios.get(
      "https://raw.githubusercontent.com/isti2623/fake-data/main/categories.json?fbclid=IwAR1VAm3hnTaknG884CUfjVvCKEWjwGqh90AXo4aXqYlCA9mLYsjR-CHC9BE"
    );
      // console.log(res.data)
    dispatch({
      type: FEATURED_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FEATURED_FAILED,
      payload: error.message,
    });
  }
};

export default featuredAction;
