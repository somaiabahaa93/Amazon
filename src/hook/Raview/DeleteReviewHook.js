import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import { createUser, loginUser } from "../../Redux/actions/authActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createReview, deleteReview } from "../../Redux/actions/reviewActions";
const DeleteReviewHook = (review) => {
  let user = JSON.parse(localStorage.getItem("user"));
  const [isUser, setIsUser] = useState(false);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.reviewReducer.deleteReview);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showDelete, setShowDelete] = useState(false);

  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  const handleRemove = async () => {
    setShowDelete(false);
    setLoading(true);
    await dispatch(deleteReview(review._id));
    setLoading(false);
    // window.location.reload();
  };

  useEffect(() => {
    if (loading === false) {
      console.log("deleted", res);
      if (res === "") {
        notify("review has been deleted successfully", "success");

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else notify("there is a problem", "error");
    }
  }, [loading]);

  useEffect(() => {
    if (user._id === review.user._id) {
      setIsUser(true);
    }
  }, []);

  return [isUser, showDelete, handleClose, handleRemove, handleShow];
};

export default DeleteReviewHook;
