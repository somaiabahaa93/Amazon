import React from 'react'
import { useRef } from 'react';
import { Button, Col, Row } from 'react-bootstrap'
import AddCouponHook from '../../hook/coupon/AddCouponHook';
import { ToastContainer } from 'react-toastify';
import AdminCouponCard from './AdminCouponCard.js'


const AdminAddCoupon = () => {
  const [couponDate, couponDiscount, couponName, changeCouponDate, onSubmt,changeCouponDiscount,changeCouponName,allcoupons]=AddCouponHook()

    const dateRef=useRef();
  return (
    <div>
      <Row className='justify-content-start'>
        <div className='admin-content-text pb-4'>اضف كوبون جديد </div>
        <Col sm="8">
            <input
            type='text' className="input-form d-block mt-3 px-3"
            placeholder='اسم الكوبون '
            value={couponName}
            onChange={changeCouponName}
            
            />
            <input
            type='text' 
            ref={dateRef}
            className="input-form d-block mt-3 px-3"
            placeholder='تاريخ انتهاء الكوبون '
            onFocus={()=>dateRef.current.type="date"}
            onBlur={()=>dateRef.current.type="text"}

            value={couponDate}
            onChange={changeCouponDate} 
            />
            <input
            type='number' className="input-form d-block mt-3 px-3"
            placeholder='نسبه خصم  الكوبون '
            value={couponDiscount}
            onChange={changeCouponDiscount}
            
            />

            <Button onClick={onSubmt} className='btn btn-secondary mt-2'>اضف كوبون</Button>
        </Col>
        <ToastContainer></ToastContainer>
        {allcoupons.data?(allcoupons.data.map((coupon)=>{
          return ( <AdminCouponCard coupon={coupon}/>)
        })):(<h3>no coupons now</h3>)}
       
      </Row>
    </div>
  )
}

export default AdminAddCoupon
