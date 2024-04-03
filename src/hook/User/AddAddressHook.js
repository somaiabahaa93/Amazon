import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addAddress } from "../../Redux/actions/addressActions";

const AddAddressHook = () => {
  const [addressMain, setAddressMain] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const res = useSelector((state) => state.addressReducer.addAddress);
  const navigate = useNavigate();

  const changeMainAddress = (e) => {
    setAddressMain(e.target.value);
  };
  const changeAddressDetails = (e) => {
    setAddressDetails(e.target.value)
  };

  const changePhone = (e) => {
    setPhone(e.target.value)
  };

  const onSubmt = async () => {
    if (phone === "" || addressDetails === '' || addressMain==="") {
      notify("please insert info ", "error");
      return;
    }
    setLoading(true);
    await dispatch(
        addAddress({
            alias: addressMain,
            details: addressDetails,
            phone: phone,
            
        })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        console.log("review", res);

        notify("address created successfully", "success");
        setTimeout(() => {
          navigate('/user/addresses')
        }, 1000);
      }

      console.log(res);

      

      
    }
  }, [loading]);

  return [phone,addressMain,addressDetails,changeAddressDetails,changeMainAddress,changePhone, onSubmt];
};

export default AddAddressHook;
