import {GET_ALL_CATEGORY,CREATE_CATEGORY,GET_ONE_CATEGORY} from "../types";
const initial = {
  category: [],
  loading: true,
  oneCategory:[],
};
const categoryReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      }
      case CREATE_CATEGORY:
        return {
          category: action.payload,
          loading: true,
        };

        case GET_ONE_CATEGORY:
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
