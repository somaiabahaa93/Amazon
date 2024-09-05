import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import { createUser, loginUser } from "../../Redux/actions/authActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createReview } from "../../Redux/actions/reviewActions";
import { addCoupon, getAllCoupons } from "../../Redux/actions/couponActions";

const AddCouponHook = () => {
    const [couponName, setCouponName] = useState("");
    const [couponDate, setCouponDate] = useState("");
    const [couponDiscount, setCouponDiscount] = useState("");

  
    const [loading, setLoading] = useState(true);
    const [loadingALl, setLoadingAll] = useState(true);

  
    const dispatch = useDispatch();
    const res = useSelector((state) => state.couponReducer.addCoupon);
    const allcoupons = useSelector((state) => state.couponReducer.allCoupons);

    const navigate = useNavigate();
  
    const changeCouponName = (e) => {
      setCouponName(e.target.value);
      console.log(e.target.value);
    };
    const changeCouponDate = (e) => {
        setCouponDate(e.target.value);
        console.log(e.target.value);
      };

      const changeCouponDiscount = (e) => {
        setCouponDiscount(e.target.value);
        console.log(e.target.value);
      };
  
    const onSubmt = async () => {
      if (couponDate === "" || couponName === '' || couponDiscount ==='') {
        notify("please insert coupon details ", "error");
        return;
      }
      setLoading(true);
      await dispatch(
        addCoupon({
            name: couponName,
            expire: couponDate,
            discount: couponDiscount
        })
      );
      setLoading(false);
      
    };
  
    useEffect(() => {
      if (loading === false) {
        if (res && res.status===201) {
          console.log("coupon", res);
  
          notify("coupon created successfully", "success");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }

        else 
        {
            notify("there is an error", "error");
 
        }


  
        console.log(res);
  
        if (res.status === 400) {
          console.log(res?.data.errors[0].msg);
  
          notify(res.data.errors[0].msg, "error");
        }
  
        if (res.status === 403) {
          console.log(res.data.message);
  
          notify(res.data.message, "error");
        }
      }
    }, [loading]);

    useEffect(()=>{
        // loadingALl(true)
        dispatch(getAllCoupons())
        // loadingALl(false)
    },[])

    console.log("allCou",allcoupons)
  
    return [couponDate, couponDiscount, couponName, changeCouponDate, onSubmt,changeCouponDiscount,changeCouponName,allcoupons];
}

export default AddCouponHook
