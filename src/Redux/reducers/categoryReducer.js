import {GET_ALL_CATEGORY,CREATE_CATEGORY,GET_ONE_CATEGORY, GET_ERROR} from "../types";
const initial = {
  category: [],
  categories:[],
  loading: true,
  oneCategory:[],
};
const categoryReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      }
      case CREATE_CATEGORY:
        return {
          ...state,
          category: action.payload,
          loading: false,
        };

        case GET_ONE_CATEGORY:
          return {
            ...state,
            oneCategory: action.payload,
            loading: false,
          };
          case GET_ERROR:
          return {
            ...state,
            oneCategory: action.payload,
            loading: true,
          };

      default:
        return state;
  }
};

export default categoryReducer;
