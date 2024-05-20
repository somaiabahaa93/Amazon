import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editUserData,
  editUserPassword,
} from "../../Redux/actions/authActions";
import notify from "../../hook/notificationHook";
import { useNavigate } from "react-router-dom";

const UserProfileHook = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState(user?.name);
  const [phone, setPhone] = useState(user?.phone);
  const [email, setEmail] = useState(user?.email);
  const [loading, setLoading] = useState(true);

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loadingPass, setLoadingPass] = useState(true);

  const res = useSelector((state) => state.authantication.editUserData);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  let body = {};
  if (user?.email === email) {
    body = { name, phone };
  } else {
    body = { name, phone, email };
  }
  const handleRemove = async () => {
    setLoading(true);
    await dispatch(editUserData(body));
    setShow(false);
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      console.log("res", res);
      if (res.status === 200) {
        notify("data updated successfully", "success");
        console.log(res.data.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }
  }, [loading]);

  //   changing password
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const resPass = useSelector((state) => state.authantication.editUserPassword);

  const onSubmit = async () => {
    setLoadingPass(true);
    if(newPassword!==confirmPassword)
    {
        notify("new password doesn't match confirm password","error")
        return;
    }
    if(newPassword.length<6||confirmPassword.length<6)
      {
          notify(" password must be at least 6","error")
          return;
      }
    await dispatch(
      editUserPassword({
        currentPassword: password,
        password: newPassword,
        passwordConfirm: confirmPassword,
      })
    );
    setLoadingPass(false);
  };
const navigate=useNavigate()
  useEffect(() => {
    if (loadingPass === false) {
      console.log("pass", resPass);
      if(resPass.status===200)
      {
        notify("password changed successfully","success")
        localStorage.setItem("token",resPass.data.token)
        localStorage.setItem("user",JSON.stringify(resPass.data.data))
        setTimeout(()=>{
            navigate("/login")

        },1000)
      }
      else 
      {
        notify("there is an error","error")

      }
    }
  }, [loadingPass]);
  return [
    onSubmit,
    user,
    show,
    handleClose,
    handleRemove,
    handleShow,
    name,
    phone,
    email,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    password,
    confirmPassword,
    newPassword,
    onChangePassword,
    onChangeNewPassword,
    onChangeConfirmPassword,
  ];
};

export default UserProfileHook;
