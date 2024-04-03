import {CREATE_PRODUCT, UPDATE_PRODUCT,
  GET_ALL_PRODUCTS,GET_ONE_PRODUCT, GET_PRODUCT_LIKE,DELETE_PRODUCT, GET_All_PRODUCTS_BY_CATEGORY, GET_All_PRODUCTS_BY_BRAND} from "../types";
const initial = {
  products: [],
  allproducts:[],
  oneProduct:[],
  productsLike:[],
  deleteProduct:[],
  updateProduct:[],
allproductsbycategory:[],
  loading: true,
};
const productReducer = (state = initial, action) => {
  switch (action.type) {
    
      case CREATE_PRODUCT:
        return {
          ...state,
          products: action.payload,
          loading: false,
        };
        case UPDATE_PRODUCT:
        return {
          ...state,
          updateProduct: action.payload,
          loading: false,
        };
        case DELETE_PRODUCT:
          return {
            ...state,
            deleteProduct: action.payload,
            loading: false,
          };
        case GET_ALL_PRODUCTS:
          return {
            ...state,
            allproducts: action.payload,
            loading: false,
          };
          case GET_All_PRODUCTS_BY_CATEGORY:
          return {
            ...state,
            allproductsbycategory: action.payload,
            loading: false,
          };

          case GET_All_PRODUCTS_BY_BRAND:
            return {
              ...state,
              allproductsbybrand: action.payload,
              loading: false,
            };
          case GET_PRODUCT_LIKE:
          return {
            ...state,
            productsLike: action.payload,
            loading: false,
          };
          case GET_ONE_PRODUCT:
            return {
              ...state,
              oneProduct: action.payload,
              loading: false,
            };
      default:
        return state;
  }
};

export default productReducer;
