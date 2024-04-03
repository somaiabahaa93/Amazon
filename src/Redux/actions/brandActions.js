import { useGetData } from "../../Hooks/useGetData"
import { useInsertDataeWithImage } from "../../Hooks/useInsertData"
import { CREATE_BRAND, GET_ALL_BRAND,GET_ERROR, GET_ONE_BRAND } from "../types"



// get all brands with limit 
export const getAllBrands = (limit) => async(dispatch)=>{
    try {
    const res=await useGetData(`/api/v1/brands?limit=${limit}`)
  dispatch({type:GET_ALL_BRAND,payload:res})
} catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
}









export const getAllBrandPage = (page) => async (dispatch) => {
    try {
      const res= await useGetData(`/api/v1/brands?limit=5&page=${page}`)
      // console.log("data",res)
      dispatch({ type: GET_ALL_BRAND, payload: res });
    } catch (e) {
      dispatch({ type: GET_ERROR, payload: "Error" + e });
    }
  };
  
  
  // create a new brand
  export const createBrand = (formData) => async (dispatch) => {
    try {
      // const res = await baseURL.get("/api/v1/categories");
      const res= await useInsertDataeWithImage(`/api/v1/brands`,formData)
      // console.log("data",res)
      dispatch({ type:CREATE_BRAND, payload: res });
    } catch (e) {
      dispatch({ type: GET_ERROR, payload: "Error" + e });
    }
  };
  
  
  // get all categories data
export const getOneBrand = (brandId) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useGetData(`/api/v1/brands/${brandId}`)
    // console.log("data",res)
    dispatch({ type: GET_ONE_BRAND, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};