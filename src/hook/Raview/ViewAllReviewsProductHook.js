import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  getAllProductReviews } from "../../Redux/actions/reviewActions";
const ViewAllReviewsProductHook = (id) => {
  
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const allReview = useSelector((state) => state.reviewReducer.allProductReviews);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true)
dispatch(getAllProductReviews(id,1,5))
setLoading(false)
    },[])

    const onPress=(page)=>{
        dispatch(getAllProductReviews(id,page,1))

    }

    return[allReview,onPress]
  
}

export default ViewAllReviewsProductHook
