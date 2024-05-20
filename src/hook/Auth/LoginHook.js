import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import { createUser, loginUser } from "../../Redux/actions/authActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.authantication.loginUser);
  const navigate = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const validateData = () => {
    if (email === "") {
      notify("please insert name ", "error");
      return;
    }
  };

  const onSubmt = async () => {
    validateData();
    setLoading(true);
    await dispatch(
      loginUser({
        email: email,
        password: password,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (loginData?.data.token) {
        console.log("login", loginData);
        localStorage.setItem("token", loginData.data.token);
        localStorage.setItem("user", JSON.stringify(loginData.data.data));
        notify("you login successfully", "success");
        setTimeout(() => {
          window.location.href="/";
        }, 1000);
      } else {
        console.log("login", loginData);

        localStorage.removeItem("token");
        notify(loginData?.message, "error");
      }

      try {
        if (loginData.data.message) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          console.log(loginData);
          notify(loginData.data.message, "error");
        }
      } catch (e) {}
    }
  }, [loading]);

  return [password, email, changePassword, changeEmail, onSubmt];
};

export default LoginHook;
