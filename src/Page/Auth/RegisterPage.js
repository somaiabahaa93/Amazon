import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterHook from "../../hook/Auth/RegisterHook";
import { ToastContainer } from 'react-toastify';


const RegisterPage = () => {
  const  [
    name,
    password,
    confirmPassword,
    phone,
    email,
    changeName,
    changePassword,
    changeConfirmPassword,
    changeEmail,
    changePhone,
    onSubmt
  ]=RegisterHook()
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">تسجيل حساب جديد</label>
          <input
            placeholder="اسم المستخدم..."
            type="text"
            className="user-input mt-3 text-center mx-auto"
            value={name}
            onChange={changeName}
          />
          <input
            placeholder="الايميل..."
            type="text"
            className="user-input my-3 text-center mx-auto"
            value={email}
            onChange={changeEmail}
          />
           <input
            placeholder="رقم الهاتف..."
            type="phone"
            className="user-input  text-center mx-auto"
            value={phone}
            onChange={changePhone}
          />
          <input
            placeholder="كلمه السر..."
            type="password"
            className="user-input my-3 text-center mx-auto"
            value={password}
            onChange={changePassword}
          />

          <input
            placeholder="تأكيد كلمه السر ..."
            type="password"
            className="user-input text-center mx-auto"
            value={confirmPassword}
            onChange={changeConfirmPassword}
          />
          <button onClick={onSubmt} className="btn-login mx-auto mt-4">تسجيل الحساب</button>
          <label className="mx-auto my-4">
            لديك حساب بالفعل؟{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer></ToastContainer>

    </Container>
  );
};

export default RegisterPage;
