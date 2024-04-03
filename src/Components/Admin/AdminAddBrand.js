import React from 'react'
import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import AdminAddBrandHook from '../../hook/Brand/AdminAddBrandHook'
const AdminAddBrand = () => {
const [img,name,onImageChange,handleSubmit,isPress,loading,setNameFn]=AdminAddBrandHook()
return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه ماركه جديده</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره الماكة</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cu: "pointer" }}
              />
            </label>
            <input onChange={onImageChange} type="file" name="photo" id="upload-photo" />
          </div>

          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الماركه" 
            onChange={setNameFn}
            value={name}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
      </Row>
      {isPress?(loading?(<Spinner animation="border" variant="primary" />):null):null}
      <ToastContainer />

    </div>
  );
}

export default AdminAddBrand
