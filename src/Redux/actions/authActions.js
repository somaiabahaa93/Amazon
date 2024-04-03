import { useInsertData } from "../../Hooks/useInsertData";
import { useUpdateData } from "../../Hooks/useUpdateData";
import { CREATE_NEW_USER, LOGIN_USER ,FORGET_PASSWORD,VERIFY_PASSWORD, RESET_PASSWORD, EDIT_USER_DATA, EDIT_USER_PASSWORD} from "../types";

// create new user

export const createUser = (data) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useInsertData(`/api/v1/auth/signup`, data);
    // console.log("data",res)
    dispatch({ type: CREATE_NEW_USER, payload: res });
  } catch (e) {
    dispatch({ type: CREATE_NEW_USER, payload: e.response });
  }
};

export const editUserData = (data) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useUpdateData(`/api/v1/users/updateMe`, data);
    console.log("data",res)
    dispatch({ type: EDIT_USER_DATA, payload: res });
  } catch (e) {
    dispatch({ type: EDIT_USER_DATA, payload: e.response });
  }
};

export const editUserPassword = (data) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useUpdateData(`/api/v1/users/changeMyPassword`, data);
    // console.log("data",res)
    dispatch({ type: EDIT_USER_PASSWORD, payload: res });
  } catch (e) {
    dispatch({ type: EDIT_USER_PASSWORD, payload: e.response });
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useInsertData(`/api/v1/auth/login`, data);
    // console.log("data",res)
    dispatch({ type: LOGIN_USER, payload: res });
  } catch (e) {
    dispatch({ type: LOGIN_USER, payload: e.response });
  }
};




export const forgetPassword = (data) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useInsertData(`/api/v1/auth/forgotPasswords`, data);
    // console.log("data",res)
    dispatch({ type: FORGET_PASSWORD, payload: res });
  } catch (e) {
    dispatch({ type: FORGET_PASSWORD, payload: e.response });
  }
};


export const verifyPassword = (data) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useInsertData(`/api/v1/auth/verifyResetCode`, data);
    // console.log("data",res)
    dispatch({ type: VERIFY_PASSWORD, payload: res });
  } catch (e) {
    dispatch({ type: VERIFY_PASSWORD, payload: e.response });
  }
};



export const resetPassword = (data) => async (dispatch) => {
  try {
    // const res = await baseURL.get("/api/v1/categories");
    const res = await useUpdateData(`/api/v1/auth/resetPassword`, data);
    // console.log("data",res)
    dispatch({ type: RESET_PASSWORD, payload: res });
  } catch (e) {
    dispatch({ type: RESET_PASSWORD, payload: e.response });
  }
};
