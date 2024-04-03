import React from "react";
import { Row, Col } from "react-bootstrap";
import EditAddressHook from "../../hook/User/EditAddressHook";
import { useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
const UserEditAddress = () => {
  const { id } = useParams();
  const [
    alias,
    phone,
    details,
    onChangeAlias,
    onChangeDetails,
    onChangePhone,
    handleUpdate,
  ] = EditAddressHook(id);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">تعديل العنوان </div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
            value={alias}
            onChange={onChangeAlias}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            value={details}
            onChange={onChangeDetails}
            placeholder="العنوان بالتفصيل"
          />
          <input
            type="text"
            value={phone}
            onChange={onChangePhone}
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleUpdate} className="btn-save d-inline mt-2 ">حفظ تعديل العنوان</button>
        </Col>
        <ToastContainer></ToastContainer>
      </Row>
    </div>
  );
};

export default UserEditAddress;
