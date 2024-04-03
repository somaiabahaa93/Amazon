import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../hook/Auth/LoginHook";
import { ToastContainer } from "react-toastify";
import ResetPasswordHook from "../../hook/Auth/ResetPasswordHook";

const ResetPasswordPage = () => {
  const [newpassword, email, changeNewPassword, changeEmail, onSubmt] = ResetPasswordHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login"> انشاء كلمه سر جديده</label>
          <input
            placeholder="الايميل..."
            type="text"
            className="user-input my-3 text-center mx-auto"
            value={email}
            onChange={changeEmail}
          />
          <input
            placeholder="كلمه السر..."
            type="password"
            className="user-input text-center mx-auto"
            value={newpassword}
            onChange={changeNewPassword}
          />
          <button onClick={onSubmt} className="btn-login mx-auto mt-4">
            تسجيل الدخول
          </button>
          
        
        </Col>

       
      </Row>
      <ToastContainer></ToastContainer>
    </Container>
  );
};

export default ResetPasswordPage;
