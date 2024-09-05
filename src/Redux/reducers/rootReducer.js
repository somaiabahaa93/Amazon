import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subCategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
import AuthReducer from "./authReducer";
import ReviewReducer from "./reviewReducer";
import wishListReducer from "./wishListReducer";
import couponReducer from "./couponReducer";
import addressReducer from "./addressReducer";
import cartReducer from "./cartReducer";
import CheckoutReducer from "./checkoutReducer";
import orderReducer from "./orderReducer"

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  allSubCategory: subCategoryReducer,
  allProducts: productReducer,
  authantication: AuthReducer,
  reviewReducer: ReviewReducer,
  wishListReducer: wishListReducer,
  couponReducer: couponReducer,
  addressReducer: addressReducer,
  cartReducer: cartReducer,
  checkoutReducer:CheckoutReducer,
  orderReducer:orderReducer
});
