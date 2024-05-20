import {CREATE_CATEGORY,GET_ALL_CATEGORY,GET_ONE_CATEGORY, GET_ERROR} from "../types";

import { useGetData } from "../../Hooks/useGetData";
import { useInsertDataeWithImage } from "../../Hooks/useInsertData";

// get all categories data
export const getAllCategory = (limit) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useGetData(`/api/v1/categories?limit=${limit}`)
    // console.log("data",res)
    dispatch({ type: GET_ALL_CATEGORY, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

// get data depends on page (with pagination)
export const getAllCategoryPage = (page) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useGetData(`/api/v1/categories?limit=5&page=${page}`)
    // console.log("data",res)
    dispatch({ type: GET_ALL_CATEGORY, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};


// create a new category
export const createCategory = (formData) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useInsertDataeWithImage(`/api/v1/categories`,formData)
    console.log("dataooooooooo",res)
    dispatch({ type:CREATE_CATEGORY, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};


// get all categories data
export const getOneCategory = (catId) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useGetData(`/api/v1/categories/${catId}`)
    // console.log("data",res)
    dispatch({ type: GET_ONE_CATEGORY, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};
