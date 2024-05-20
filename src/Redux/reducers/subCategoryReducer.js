import {CREATE_SUB_CATEGORY,GET_SUB_CATEGORY} from "../types";
const initial = {
  subCategory: [],
  subCategories:[],
  loading: true,
};
const subCategoryReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        ...state,
        subCategory: action.payload,
        loading: false,
      }
      case GET_SUB_CATEGORY:
        return {
          ...state,
          subCategories: action.payload,
          loading: false,
        }
     

      default:
        return state;
  }
};

export default subCategoryReducer;
