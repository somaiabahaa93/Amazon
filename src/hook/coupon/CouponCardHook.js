import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCoupon } from '../../Redux/actions/couponActions';
import notify from '../notificationHook';

const CouponCardHook = (coupon) => {

    const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const res = useSelector((state) => state.couponReducer.deleteCoupon);

  const handleRemove = async () => {
    console.log("coupon",coupon._id)
     await dispatch(deleteCoupon(coupon._id));
    setShow(false);
    console.log("res",res)
    if(res)
    {
        notify("coupon deleted successfully","success")
    }

    setTimeout(()=>{
        window.location.reload();

    },1000)

  };
    const dateString=coupon.expire
    const formDate=(dateString)=>{
        const options={year:"numeric",month:"numeric",day:"numeric"}
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return[formDate,dateString,handleClose,show,handleRemove,handleShow]
}

export default CouponCardHook
