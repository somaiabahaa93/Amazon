import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../images/delete.png";
import { ToastContainer } from 'react-toastify';

import CouponCardHook from "../../hook/coupon/CouponCardHook";

const AdminCouponCard = ({ coupon }) => {
    const [formDate,dateString,handleClose,show,handleRemove,handleShow]=CouponCardHook(coupon)

    

  return (

    
    <div className="user-address-card my-3 px-2">
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this product for sure ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRemove}>
            delete Product{" "}
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="d-flex justify-content-between  ">
        <Col xs="1">
          <div className="p-2">{coupon.name} </div>
        </Col>
        <Col xs="4" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <div className="d-flex mx-2">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <Link to={`/admin/editcoupon/${coupon._id}`} style={{ textDecoration: "none" }}>
                <p className="item-delete-edit"> تعديل</p>
              </Link>
            </div>
            <div className="d-flex ">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
                onClick={handleShow}
              />
              <p className="item-delete-edit"> ازاله</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
           تاريخ الانتهاء: {formDate(dateString)}{" "}
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
نسبه الخصم           </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {coupon.discount}{" "} %
          </div>
        </Col>
        <ToastContainer/>
      </Row>
    </div>
  );
};

export default AdminCouponCard;
