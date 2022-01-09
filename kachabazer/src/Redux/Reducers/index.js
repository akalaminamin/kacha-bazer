import { combineReducers } from "redux";
import productReducer from "./productReducer";
import featuredReducer from "./featuredReducer";
import discountReducer from "./discountReducer";
const rootReducer = combineReducers({
  products: productReducer,
  featured: featuredReducer,
  discount: discountReducer,
});
export default rootReducer;
