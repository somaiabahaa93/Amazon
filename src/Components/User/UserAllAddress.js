import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCard from "./UserAddressCard";
import AllAddressessHook from "../../hook/User/AllAddressessHook";
const UserAllAddress = () => {
  const [allAdd] = AllAddressessHook();
  if (allAdd) {
    console.log(allAdd);
  }
  return (
    <div>
      <div className="admin-content-text pb-4">دفتر العنوانين</div>
      {allAdd.data ? (
        allAdd.data.map((item) => {
          return <UserAddressCard item={item} />;
        })
      ) : (
        <h3>no address now</h3>
      )}

      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address">اضافه عنوان جديد</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllAddress;
