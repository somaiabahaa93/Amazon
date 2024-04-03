import { CREATE_REVIEW,DELETE_REVIEW,VIEW_ALL_REVIEWS_PRODUCT,UPDATE_REVIEW} from "../types"
const initial={newReview:[],allProductReviews:[],deleteReview:[],updateReview:[]}
const ReviewReducer=(state=initial,action)=>{
    switch(action.type)
    {
        
            case CREATE_REVIEW:
                {
                    return {
                        ...state,
                        newReview:action.payload,
                        loading:false
                    }
                }
                case VIEW_ALL_REVIEWS_PRODUCT:
                {
                    return {
                        ...state,
                        allProductReviews:action.payload,
                        loading:false
                    }
                }
                case DELETE_REVIEW:
                {
                    return {
                        ...state,
                        deleteReview:action.payload,
                        loading:false
                    }
                }

                case UPDATE_REVIEW:
                    {
                        return {
                            ...state,
                            updateReview:action.payload,
                            loading:false
                        }
                    }
              
            default:
                return state;
    }

}

export default ReviewReducer