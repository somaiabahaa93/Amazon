import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  addCoupon,
  editCoupon,
  getAllCoupons,
  getOneCoupon,
} from "../../Redux/actions/couponActions";

const EditCouponHook = (id) => {
  const [couponName, setCouponName] = useState("");
  const [couponDate, setCouponDate] = useState("");
  const [couponDiscount, setCouponDiscount] = useState("");

  const [loading, setLoading] = useState(true);
  const [loadingAll, setLoadingAll] = useState(true);

  const dispatch = useDispatch();
  const res = useSelector((state) => state.couponReducer.updateCoupon);
  const oneCoupon = useSelector((state) => state.couponReducer.oneCoupon);

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
    if (couponDate === "" || couponName === "" || couponDiscount === "") {
      notify("please insert coupon details ", "error");
      return;
    }
    setLoading(true);
    await dispatch(
      editCoupon(id, {
        name: couponName,
        expire: couponDate,
        discount: couponDiscount,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      console.log(res);
      if (res && res.status === 200) {
        console.log("coupon", res);

        notify("coupon edited successfully", "success");
        setTimeout(() => {
          navigate("/admin/addcoupon");
        }, 1000);
      } else {
        notify("there is an error", "error");
      }
    }
  }, [loading]);

  useEffect(() => {
    setLoadingAll(true);
    const get = async () => {
      await dispatch(getOneCoupon(id));
    };
    get();

    setLoadingAll(false);
  }, []);

  const formDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  useEffect(() => {
    if (loadingAll === false) {
      if (oneCoupon.data) {
        setCouponName(oneCoupon.data.name);
        setCouponDiscount(oneCoupon.data.discount);
        setCouponDate(formDate(oneCoupon.data.expire));

        console.log("nammmme", oneCoupon.data.name);
      }
    }
  }, [loadingAll]);

  // console.log("one",oneCoupon)

  return [
    couponDate,
    couponDiscount,
    couponName,
    changeCouponDate,
    onSubmt,
    changeCouponDiscount,
    changeCouponName,
  ];
};

export default EditCouponHook;
