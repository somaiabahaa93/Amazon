import { useDeleteData } from "../../Hooks/useDeleteData"
import { useGetData, useGetDataToken } from "../../Hooks/useGetData"
import { useInsertData } from "../../Hooks/useInsertData"
import { ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST,GET_ALL_WISHLIST } from "../types"



// get all user wishList
export const getAllUserWIshList = (limit) => async(dispatch)=>{
    try {
    const res=await useGetDataToken(`/api/v1/wishlist`)
  dispatch({type:GET_ALL_WISHLIST,payload:res})
} catch (e) {
    dispatch({ type: GET_ALL_WISHLIST, payload: "Error" + e.response });
  }
}



  
  
  // add product to wish list
  export const addProductToWishList = (data) => async (dispatch) => {
    try {
      // const res = await baseURL.get("/api/v1/categories");
      const res= await useInsertData(`/api/v1/wishlist`,data)
      // console.log("data",res)
      dispatch({ type:ADD_TO_WISHLIST, payload: res });
    } catch (e) {
      dispatch({ type: ADD_TO_WISHLIST, payload: "Error" + e.response });
    }
  };
  
  
 // remove product to wish list
 export const removeProductFromWishList = (id) => async (dispatch) => {
    try {
      // const res = await baseURL.get("/api/v1/categories");
      const res= await useDeleteData(`/api/v1/wishlist/${id}`)
      // console.log("data",res)
      dispatch({ type:REMOVE_FROM_WISHLIST, payload: res });
    } catch (e) {
      dispatch({ type: REMOVE_FROM_WISHLIST, payload: "Error" + e.response });
    }
  };