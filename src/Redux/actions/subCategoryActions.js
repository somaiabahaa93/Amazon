import { useGetData } from "../../Hooks/useGetData"
import { useInsertData } from "../../Hooks/useInsertData"
import {  CREATE_SUB_CATEGORY,GET_ERROR,GET_SUB_CATEGORY } from "../types"




// create a new subCategory
export const createSubCategory = (data) => async (dispatch) => {
    try {
      // const res = await baseURL.get("/api/v1/categories");
      const res= await useInsertData(`/api/v1/subcategories`,data)
      // console.log("data",res)
      dispatch({ type:CREATE_SUB_CATEGORY, payload: res });
    } catch (e) {
      dispatch({ type: GET_ERROR, payload: "Error" + e });
    }
  };


  // get all subcategories for a specifc categorty data
export const getSubCateogries = (id) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useGetData(`/api/v1/categories/${id}/subcategories`)
     console.log("data",res)
    dispatch({ type: GET_SUB_CATEGORY, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};