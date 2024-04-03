import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import { createUser, loginUser } from "../../Redux/actions/authActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createReview, deleteReview } from "../../Redux/actions/reviewActions";
import { editReview } from "../../Redux/actions/reviewActions";
const UpdateRateHook = (review) => {

    const dispatch = useDispatch();
    const res = useSelector((state) => state.reviewReducer.updateReview);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [showEdit, setShowEdit] = useState(false);
    const [rateText, setRateText] = useState(review.review);
    const [rateValue, setRateValue] = useState(review.rating);
console.log("updateReview",review)


  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const onChangeRateText=(e)=>{
    setRateText(e.target.value)
  }

  const onChangeRateValue=(val)=>{
    setRateValue(val)
  }

  const handleUpdate = async () => {
    setShowEdit(false);
    setLoading(true)
     await dispatch(editReview(review._id,{
        review: rateText,
        rating: rateValue
    }))
    setLoading(false)
    // window.location.reload();
  };
  
    useEffect(()=>{
        if(loading===false)
        {
            console.log(res)
            if(res && res.status===200)
            {
                notify("review has been updated successfully","success")
                setTimeout(()=>{
                         window.location.reload();
    
                },1000)
            }
           

            else
            notify("there is a problem","error")

        }
    },[loading])

    return [showEdit,handleCloseEdit,handleUpdate,handleShowEdit,onChangeRateText,rateText,onChangeRateValue,rateValue]

  
}

export default UpdateRateHook
