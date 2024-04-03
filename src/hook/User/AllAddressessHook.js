import React from "react";
import { useState } from "react";
import notify from "../../hook/notificationHook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  getAllProductReviews } from "../../Redux/actions/reviewActions";
import { getAllAddressess } from "../../Redux/actions/addressActions";
const AllAddressessHook = () => {
  
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const allAdd = useSelector((state) => state.addressReducer.allAdressess);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true)
dispatch(getAllAddressess())
setLoading(false)
    },[])

    useEffect(()=>{
        console.log(allAdd)
    },[loading])

    // const onPress=(page)=>{
    //     dispatch(getAllProductReviews(id,page,1))

    // }

    return[allAdd]
  
}

export default AllAddressessHook
