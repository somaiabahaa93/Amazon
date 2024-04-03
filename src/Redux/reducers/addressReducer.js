import {
  ADD_ADRESS,
  GET_ALL_ADDRESSESS,
  UPDATE_ADRESS,
  GET_ONE_ADDRESS,
  DELETE_ADRESS,
} from "../types";
const initial = {
  addAddress: [],
  allAdressess: [],
  updateAddress: [],
  deleteAddress: [],
  oneAddress:[]
};
const AdressReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_ADRESS: {
      return {
        ...state,
        addAddress: action.payload,
        loading: false,
      };
    }
    case GET_ONE_ADDRESS: {
      return {
        ...state,
        oneAddress: action.payload,
        loading: false,
      };
    }
    case GET_ALL_ADDRESSESS: {
      return {
        ...state,
        allAdressess: action.payload,
        loading: false,
      };
    }
    case DELETE_ADRESS: {
      return {
        ...state,
        deleteAddress: action.payload,
        loading: false,
      };
    }

    case UPDATE_ADRESS: {
      return {
        ...state,
        updateAddress: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default AdressReducer;
