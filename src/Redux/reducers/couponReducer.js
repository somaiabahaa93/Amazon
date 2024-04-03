import {
  ADD_COUPON,
  EDIT_COUPON,
  DELETE_COUPON,
  GET_ALL_COUPONS,
  ONE_COUPON,
} from "../types";
const initial = {
  allCoupons: [],
  deleteCoupon: [],
  updateCoupon: [],
  addCoupon: [],
  oneCoupon: [],
};
const CouponReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_COUPON: {
      return {
        ...state,
        addCoupon: action.payload,
        loading: false,
      };
    }

    case ONE_COUPON: {
      return {
        ...state,
        oneCoupon: action.payload,
        loading: false,
      };
    }

    case GET_ALL_COUPONS: {
      return {
        ...state,
        allCoupons: action.payload,
        loading: false,
      };
    }

    case DELETE_COUPON: {
      return {
        ...state,
        deleteCoupon: action.payload,
        loading: false,
      };
    }

    case EDIT_COUPON: {
      return {
        ...state,
        updateCoupon: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default CouponReducer;
