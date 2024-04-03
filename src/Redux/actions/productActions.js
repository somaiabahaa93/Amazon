import {CREATE_PRODUCT,GET_ALL_PRODUCTS,GET_ERROR,GET_ONE_PRODUCT, 
  GET_PRODUCT_LIKE,DELETE_PRODUCT,UPDATE_PRODUCT,GET_All_PRODUCTS_BY_CATEGORY, GET_All_PRODUCTS_BY_BRAND} from "../types";

import { useInsertDataeWithImage } from "../../Hooks/useInsertData";
import { useUpdateDataWithImage } from "../../Hooks/useUpdateData";
import { useGetData } from "../../Hooks/useGetData";
import { useDeleteData } from "../../Hooks/useDeleteData";



// create a new category
export const createProduct = (formData) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useInsertDataeWithImage(`/api/v1/products`,formData)
    // console.log("data",res)
    dispatch({ type:CREATE_PRODUCT, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};



// get all products
export const getAllProducts = (limit) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useGetData(`/api/v1/products?limit=${limit}`)
    // console.log("data",res)
    dispatch({ type:GET_ALL_PRODUCTS, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

// get products on page 
export const getAllProductPage = (page,limit) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useGetData(`/api/v1/products?limit=${limit}&page=${page}`)
    // console.log("data",res)
    dispatch({ type: GET_ALL_PRODUCTS, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};



// get products by category  
export const getAllProductByCategory = (page,limit,categoryId) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useGetData(`/api/v1/products?limit=${limit}&page=${page}&category=${categoryId}`)
    // console.log("data",res)
    dispatch({ type: GET_All_PRODUCTS_BY_CATEGORY, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e.res });
  }
};


export const getAllProductByBrand = (page,limit,brandId) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useGetData(`/api/v1/products?limit=${limit}&page=${page}&brand=${brandId}`)
    // console.log("data",res)
    dispatch({ type: GET_All_PRODUCTS_BY_BRAND, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e.res });
  }
};


// get all products query
export const getAllProductsSearch = (queryString) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useGetData(`/api/v1/products?${queryString}`)
    // console.log("data",res)
    dispatch({ type:GET_ALL_PRODUCTS, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};


// get One Product 
export const getOneProduct = (id) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useGetData(`/api/v1/products/${id}`)
    // console.log("data",res)
    dispatch({ type:GET_ONE_PRODUCT, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

// get productsAlike 

export const getProductLike = (id) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useGetData(`/api/v1/products?category=${id}`)
    console.log("dataLike>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",res)
    dispatch({ type:GET_PRODUCT_LIKE, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

// delete product 
export const deleteOneProduct = (id) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useDeleteData(`/api/v1/products/${id}`)
    // console.log("data",res)
    dispatch({ type:DELETE_PRODUCT, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

// updateProduct
export const updateProduct = (id,formData) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res= await useUpdateDataWithImage(`/api/v1/products/${id}`,formData)
    // console.log("data",res)
    dispatch({ type:UPDATE_PRODUCT, payload: res });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};
