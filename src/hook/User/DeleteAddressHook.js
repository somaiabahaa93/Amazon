import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import { createUser, loginUser } from "../../Redux/actions/authActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createReview, deleteReview } from "../../Redux/actions/reviewActions";
import { deleteAddress } from "../../Redux/actions/addressActions";
const DeleteAddressHook = (item) => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.addressReducer.deleteAddress);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showDelete, setShowDelete] = useState(false);



  const handleRemove = async () => {
    setShowDelete(false);
    setLoading(true);
    await dispatch(deleteAddress(item._id));
    setLoading(false);
    // window.location.reload();
  };

  useEffect(() => {
    if (loading === false) {
      console.log("deleted", res);
      if (res.status === "success") {
        notify("address has been deleted successfully", "success");

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else notify("there is a problem", "error");
    }
  }, [loading]);

  

  return [handleRemove];
};

export default DeleteAddressHook;
