import React from 'react'
import { useRef } from 'react';
import { Button, Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import EditCouponHook from '../../hook/coupon/EditCouponHook';
import { useParams } from 'react-router-dom';

const AdminEditCoupon = () => {
    console.log("params",useParams())
    const {id}=useParams()
  const [couponDate, couponDiscount, couponName, changeCouponDate, onSubmt,changeCouponDiscount,changeCouponName]=EditCouponHook(id)

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
           

            value={couponDate}
            onChange={changeCouponDate} 
            />
            <input
            type='number' className="input-form d-block mt-3 px-3"
            placeholder='نسبه خصم  الكوبون '
            value={couponDiscount}
            onChange={changeCouponDiscount}
            
            />

            <Button onClick={onSubmt} className='btn btn-secondary mt-2'> حفظ التعديل</Button>
        </Col>
        <ToastContainer></ToastContainer>
        
       
      </Row>
    </div>
  )
}

export default AdminEditCoupon

