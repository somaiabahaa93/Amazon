import { useDeleteData } from "../../Hooks/useDeleteData";
import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { useUpdateData } from "../../Hooks/useUpdateData";
import {
  ADD_ADRESS,
  DELETE_ADRESS,
  GET_ALL_ADDRESSESS,
  UPDATE_ADRESS,
  GET_ONE_ADDRESS
} from "../types";

export const getAllAddressess = () => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/addresses`);
    dispatch({ type: GET_ALL_ADDRESSESS, payload: res });
  } catch (e) {
    dispatch({ type: GET_ALL_ADDRESSESS, payload: +e.response });
  }
};

export const deleteAddress = (id) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useDeleteData(`/api/v1/addresses/${id}`);
    console.log("dataDeleted", res);
    dispatch({ type: DELETE_ADRESS, payload: res });
  } catch (e) {
    dispatch({ type: DELETE_ADRESS, payload: +e.response });
  }
};

export const editAddress = (id, body) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useUpdateData(`/api/v1/addresses/${id}`, body);
    dispatch({ type: UPDATE_ADRESS, payload: res });
  } catch (e) {
    dispatch({ type: UPDATE_ADRESS, payload: +e.response });
  }
};

export const getOneAddress = (id) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useGetDataToken(`/api/v1/addresses/${id}`);
    dispatch({ type: GET_ONE_ADDRESS, payload: res });
  } catch (e) {
    dispatch({ type: GET_ONE_ADDRESS, payload: +e.response });
  }
};

export const addAddress = (Data) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useInsertData(`/api/v1/addresses`, Data);
    // console.log("data",res)
    dispatch({ type: ADD_ADRESS, payload: res });
  } catch (e) {
    dispatch({ type: ADD_ADRESS, payload: e.response });
  }
};
