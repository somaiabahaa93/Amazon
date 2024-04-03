import { useDeleteData } from "../../Hooks/useDeleteData";
import { useGetData, useGetDataToken } from "../../Hooks/useGetData";
import {
  useInsertData,
} from "../../Hooks/useInsertData";
import { useUpdateData } from "../../Hooks/useUpdateData";
import {
  CREATE_REVIEW,
  DELETE_REVIEW,
  UPDATE_REVIEW,
  VIEW_ALL_REVIEWS_PRODUCT,
} from "../types";




// getAllReviewsProduct
export const getAllProductReviews = (prodId,page,limit) => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/products/${prodId}/reviews?page=${page}&limit=${limit}`);
    // console.log("data",res)
    dispatch({ type: VIEW_ALL_REVIEWS_PRODUCT, payload: res });
  } catch (e) {
    dispatch({ type: VIEW_ALL_REVIEWS_PRODUCT, payload:  + e.response });
  }
};


// delete review 
export const deleteReview = (id) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useDeleteData(`/api/v1/reviews/${id}`)
     console.log("dataDeleted",res)
    dispatch({ type:DELETE_REVIEW, payload: res });
  } catch (e) {
    dispatch({ type: DELETE_REVIEW, payload:  + e.response });
  }
};


// delete review 
export const editReview = (id,body) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useUpdateData(`/api/v1/reviews/${id}`,body)
     console.log("updatedDeleted",res)
    dispatch({ type:UPDATE_REVIEW, payload: res });
  } catch (e) {
    dispatch({ type: UPDATE_REVIEW, payload:  + e.response });
  }
};

// create a new revirw
export const createReview = (proId, Data) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useInsertData(`/api/v1/products/${proId}/reviews`, Data);
    // console.log("data",res)
    dispatch({ type: CREATE_REVIEW, payload: res });
  } catch (e) {
    dispatch({ type: CREATE_REVIEW, payload: e.response });
  }
};


