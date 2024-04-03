import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import { createUser, loginUser } from "../../Redux/actions/authActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createReview, deleteReview } from "../../Redux/actions/reviewActions";
import { editReview } from "../../Redux/actions/reviewActions";
import { editAddress, getOneAddress } from "../../Redux/actions/addressActions";
const UpdateAddressHook = (id) => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.addressReducer.oneAddress);
  const resEdit = useSelector((state) => state.addressReducer.updateAddress);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loadingEdit, setLoadingEdit] = useState(true);

  const [alias, setAlias] = useState('');
  const [details, setDetails] = useState('');
  const [phone, setPhone] = useState('');
  // console.log("updateReview",review)

  const onChangeAlias = (e) => {
    setAlias(e.target.value);
  };

  const onChangeDetails = (e) => {
    setDetails(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleUpdate = async () => {
    // setShowEdit(false);
    setLoadingEdit(true);
    await dispatch(
      editAddress(res.data._id, {
        alias,
        details,
        phone,
      })
    );
    setLoadingEdit(false);
    // window.location.reload();
  };

  useEffect(() => {
    if (loading === false) {
      
    if(res.data)
    {
        console.log(res)
        setAlias(res.data.alias)
        setPhone(res.data.phone)
        setDetails(res.data.details)
    }

   
    }
  }, [loading]);

  useEffect(()=>{
    if(loadingEdit===false)
    {
        console.log(resEdit);
      if (resEdit && resEdit.status === 200) {
        notify("address has been updated successfully", "success");
        setTimeout(() => {
navigate('/user/addresses')       
 }, 1000);
      } else notify("there is a problem", "error");

    }

  },[loadingEdit])
  useEffect(() => {
    setLoading(true)
    const get=async()=>{
        await dispatch(getOneAddress(id));

    }
    get()
    setLoading(false)
  }, []);


  console.log("address", res);
  return [alias,phone,details,onChangeAlias,onChangeDetails,onChangePhone,handleUpdate];
};

export default UpdateAddressHook;
