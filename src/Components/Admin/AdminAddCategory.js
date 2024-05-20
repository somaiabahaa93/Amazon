import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import AdminAddCategoryHook from "../../hook/Category/AdminAddCategoryHook";
const AdminAddCategory = () => {
  const [img,name,onImageChange,handleSubmit,isPress,loading,setNameFn]=AdminAddCategoryHook()

 

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new Category</div>
        <Col sm="8">
          <div className="text-form pb-2"> Category image</div>
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
            placeholder=" Category name" 
            onChange={setNameFn}
            value={name}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">Save </button>
        </Col>
      </Row>
      {isPress?(loading?(<Spinner animation="border" variant="primary" />):null):null}
      <ToastContainer />

    </div>
  );
};

export default AdminAddCategory;
