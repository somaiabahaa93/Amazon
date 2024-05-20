import { CREATE_BRAND, GET_ALL_BRAND ,GET_ONE_BRAND} from "../types"
const initial={brands:[],loading:true,oneBrand:[]}
const BrandReducer=(state=initial,action)=>{
    switch(action.type)
    {
        case GET_ALL_BRAND:
            {
                return {
                    ...state,
                    brands:action.payload,
                    loading:false
                }
            }
            case CREATE_BRAND:
                {
                    return {
                        ...state,
                        brands:action.payload,
                        loading:false
                    }
                }
                case GET_ONE_BRAND:
                    {
                        return {
                            ...state,

                            oneBrand:action.payload,
                            loading:false
                        }
                    }
            default:
                return state;
    }

}

export default BrandReducer