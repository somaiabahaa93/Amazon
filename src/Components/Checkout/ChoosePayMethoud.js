import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import AllAddressessHook from "../../hook/User/AllAddressessHook";
import OrderPayCashHook from "../../hook/Checkout/OrderPayCashHook";
import { ToastContainer } from "react-toastify";
import notify from "../../hook/notificationHook";
import OrderPayCardHook from "../../hook/Checkout/OrderPayCardHook";


const ChoosePayMethoud = () => {
  const [allAdd] = AllAddressessHook();
  const [type,setType]=useState('')

 const [handleChooseAddress,addressDetails,handleCreateOrderCash]=OrderPayCashHook()
 const [handleCreateOrderCard]=OrderPayCardHook(addressDetails)
 const methodType=(e)=>{
console.log("meeeeeeeeee",e.target.value)
setType(e.target.value)
 }

 const handlePay=()=>{
  if (type === "card")
  {
    handleCreateOrderCard()

  }else if (type==="cash")
  {
    handleCreateOrderCash()
  }else 
  {
    notify("please choose a pay method","warn")
  }
 }

  return (
    <div>
      <div className="admin-content-text pt-5">Choose payment method</div>
      <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between ">
          <Col xs="12" className="my-2">
            <input
            onChange={methodType}
              name="group"
              id="group1"
              type="radio"
              value="card"
              className="mt-2"
            />
            <label className="mx-2" for="group1">
              pay with card{" "}
            </label>
          </Col>
        </Row>

        <Row className="mt-1">
          <Col xs="12" className="d-flex">
            <input
                        onChange={methodType}

              name="group"
              id="group2"
              type="radio"
              value="cash"
              className="mt-2"
            />
            <label className="mx-2" for="group2">
              pay in cash{" "}
            </label>
          </Col>
        </Row>

        <Row>
          <Col xs="6">
            <select
              name="languages"
              id="lang"
              className="select input-form-area mt-3 px-2 "
              onChange={ handleChooseAddress}
            >
              <option value="0"> Addresses</option>
              {allAdd?.data
                ? allAdd?.data?.map((item, index) => {
                    return (
                      <option key={index} value={item._id}>
                        {item.alias}
                      </option>
                    );
                  })
                : null}
            </select>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline   border">34000 جنية</div>
          <div onClick={handlePay } className="product-cart-add px-3 pt-2 d-inline me-2">
            {" "}
            اتمام الشراء
          </div>
        </Col>
      </Row>
      <ToastContainer></ToastContainer>

    </div>
  );
};

export default ChoosePayMethoud;
