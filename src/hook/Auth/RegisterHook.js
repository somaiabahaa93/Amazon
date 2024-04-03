import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../Redux/actions/authActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const newUser = useSelector((state) => state.authantication.newUser);
  const navigate=useNavigate()
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };

  const validateData = () => {
    if (name === "") {
      notify("please insert name ", "error");
      return;
    }

    if (phone.length <= 10) {
      notify("please insert a correct phone with 11 number ", "error");
      return;
    }

    if (password !== confirmPassword) {
      notify("password and confirmPasword must be the same", "error");
      return;
    }
  };

  const onSubmt = async () => {
    validateData();
    setLoading(true);
    await dispatch(
      createUser({
        name: name,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,
        phone: phone,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (newUser) {
        console.log("newUser", newUser);
        localStorage.setItem("token",newUser.data.token)
        notify("you registerd successfully",'success')
        setTimeout(()=>{
navigate('/login')
        },2000)
      }

      else 
      {console.log("errors",newUser)}
    }
  }, [loading]);

  return [
    name,
    password,
    confirmPassword,
    phone,
    email,
    changeName,
    changePassword,
    changeConfirmPassword,
    changeEmail,
    changePhone,
    onSubmt,
  ];
};

export default RegisterHook;
