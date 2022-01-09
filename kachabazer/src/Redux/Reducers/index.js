import { combineReducers } from "redux";
import productReducer from "./productReducer";
import featuredReducer from "./featuredReducer";
import discountReducer from "./discountReducer";
import detailsProducts from "./detailsReducer";
const rootReducer = combineReducers({
  products: productReducer,
  featured: featuredReducer,
  discount: discountReducer,
  details: detailsProducts,
});
export default rootReducer;
