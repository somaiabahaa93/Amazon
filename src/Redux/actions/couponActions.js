import { useDeleteData } from "../../Hooks/useDeleteData";
import { useGetData, useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { useUpdateData } from "../../Hooks/useUpdateData";
import {
  ADD_COUPON,
  EDIT_COUPON,
  DELETE_COUPON,
  GET_ALL_COUPONS,
  ONE_COUPON,
} from "../types";

export const getAllCoupons = (prodId, page, limit) => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/coupon`);
    // console.log("data",res)
    dispatch({ type: GET_ALL_COUPONS, payload: res });
  } catch (e) {
    dispatch({ type: GET_ALL_COUPONS, payload: +e.response });
  }
};

export const getOneCoupon = (id) => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/coupon/${id}`);
    // console.log("data",res)
    dispatch({ type: ONE_COUPON, payload: res });
  } catch (e) {
    dispatch({ type: ONE_COUPON, payload: +e.response });
  }
};

export const deleteCoupon = (id) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useDeleteData(`/api/v1/coupon/${id}`);
    dispatch({ type: DELETE_COUPON, payload: res });
  } catch (e) {
    dispatch({ type: DELETE_COUPON, payload: +e.response });
  }
};

export const editCoupon = (id, body) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useUpdateData(`/api/v1/coupon/${id}`, body);
    console.log("updatedDeleted", res);
    dispatch({ type: EDIT_COUPON, payload: res });
  } catch (e) {
    dispatch({ type: EDIT_COUPON, payload: +e.response });
  }
};

// create a new coupon
export const addCoupon = (Data) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useInsertData(`/api/v1/coupon`, Data);
    // console.log("data",res)
    dispatch({ type: ADD_COUPON, payload: res });
  } catch (e) {
    dispatch({ type: ADD_COUPON, payload: e.response });
  }
};
