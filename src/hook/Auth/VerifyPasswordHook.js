import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  loginUser,
  verifyPassword,
} from "../../Redux/actions/authActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VerifyPasswordHook = () => {
  const [code, setCode] = useState("");

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const res = useSelector((state) => state.authantication.verifyPassword);
  const navigate = useNavigate();

  const changeCode = (e) => {
    setCode(e.target.value);
  };

  const validateData = () => {
    if (code === "") {
      notify("please insert code ", "error");
      return;
    }
  };

  const onSubmt = async () => {
    validateData();
    setLoading(true);
    await dispatch(
      verifyPassword({
        resetCode: code,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res.data.status === "Success") {
        console.log("res", res);
   
          notify("code has sent successfully", "success");
        setTimeout(() => {
          navigate("/user/reset-code");
        }, 1000);
      }

      if(res.data.status==="fail")
      {
        notify("code is wrong or expired", "error");

      }
    }
  }, [loading]);

  return [code, changeCode, onSubmt];
};

export default VerifyPasswordHook;
