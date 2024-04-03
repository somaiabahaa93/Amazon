import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import { createUser, forgetPassword, loginUser } from "../../Redux/actions/authActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPasswordHook = () => {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const forgetPasswordData = useSelector((state) => state.authantication.forgetPassword);
  const navigate = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  

  const validateData = () => {
    if (email === "") {
      notify("please insert your email ", "error");
      return;
    }
  };

  const onSubmt = async () => {
    validateData();
    setLoading(true);
    await dispatch(
      forgetPassword({
        email: email,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
        console.log("data",forgetPasswordData)
      if (forgetPasswordData.data.status==="Success") {
        console.log("data",forgetPasswordData)
    
        notify("code send to your email", "success");
        setTimeout(() => {
        navigate('/user/verify-code')
        }, 1000);
      } 
      if(forgetPasswordData.data.status==="fail")
      {
        notify("this email is wrong", "error");

      }

      try {
        // if (loginData.data.message) {
        //   localStorage.removeItem("token");
        //   localStorage.removeItem("user");
        //   console.log(loginData);
        //   notify(loginData.data.message, "error");
        // }
      } catch (e) {}
    }
  }, [loading]);

  return [ email, changeEmail, onSubmt];
};

export default ForgetPasswordHook;
