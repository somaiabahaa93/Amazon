import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import { createUser, loginUser, resetPassword } from "../../Redux/actions/authActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordHook = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const res = useSelector((state) => state.authantication.resetPassword);
  const navigate = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const validateData = () => {
    if (email === "") {
      notify("please insert email ", "error");
      return;
    }

    if (newpassword === "") {
        notify("please insert new password ", "error");
        return;
      }
  };

  const onSubmt = async () => {
    validateData();
    setLoading(true);
    await dispatch(
      resetPassword({
        email: email,
        newPassword: newpassword,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res.data.token) {
        console.log("res", res);
        
        notify("password has been changed  successfully", "success");
        localStorage.setItem("token",res.data.token)
        // localStorage.setItem("user", JSON.stringify(res.data.data));

        setTimeout(() => {
navigate("/")
        }, 1000);
      } 
     

      
    }
  }, [loading]);

  return [newpassword, email, changeNewPassword, changeEmail, onSubmt];
};

export default ResetPasswordHook;
