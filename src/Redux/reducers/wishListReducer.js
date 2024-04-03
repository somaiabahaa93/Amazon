import {
  GET_ALL_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../types";
const initial = {
  allWishList: [],
  addWishList: [],
  removeWishList: [],

  loading: true,
};
const wishListReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        addWishList: action.payload,
        loading: false,
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        removeWishList: action.payload,
        loading: false,
      };
    case GET_ALL_WISHLIST:
      return {
        ...state,
        allWishList: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default wishListReducer;
