import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import { createUser, loginUser } from "../../Redux/actions/authActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createReview } from "../../Redux/actions/reviewActions";

const AddRateHook = (proId) => {
  let user=JSON.parse( localStorage.getItem("user"))
  const [rateValue, setRateValue] = useState("");
  const [rateText, setRateText] = useState("");

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const res = useSelector((state) => state.reviewReducer.newReview);
  const navigate = useNavigate();

  const changeRateText = (e) => {
    setRateText(e.target.value);
    console.log(e.target.value);
  };
  const changeRateValue = (value) => {
    console.log(value);
    setRateValue(value);
  };

  const onSubmt = async () => {
    if (rateText === "" || rateValue === 0) {
      notify("please insert rate ", "error");
      return;
    }
    setLoading(true);
    await dispatch(
      createReview(proId, {
        review: rateText,
        rating: rateValue,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 201) {
        console.log("review", res);

        notify("review created successfully", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }

      console.log(res);

      if (res.status === 400) {
        console.log(res.data.errors[0].msg);

        notify(res.data.errors[0].msg, "error");
      }

      if (res.status === 403) {
        console.log(res.data.message);

        notify(res.data.message, "error");
      }
    }
  }, [loading]);

  return [rateText, rateValue, changeRateText, changeRateValue, onSubmt,user];
};

export default AddRateHook;
