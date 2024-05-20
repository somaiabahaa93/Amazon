import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../hook/Auth/LoginHook";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  const [password, email, changePassword, changeEmail, onSubmt] = LoginHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login"> login</label>
          <input
            placeholder="email..."
            type="text"
            className="user-input my-3 text-center mx-auto"
            value={email}
            onChange={changeEmail}
          />
          <input
            placeholder=" password "
            type="password"
            className="user-input text-center mx-auto"
            value={password}
            onChange={changePassword}
          />
          <button onClick={onSubmt} className="btn-login mx-auto mt-4">
           login
          </button>
          <label className="mx-auto my-4">
              You don't have account ؟{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                click Here
              </span>
            </Link>
          </label>
          <label className="mx-auto my-4">
            <Link
              to="/user/forget-password"
              style={{ textDecoration: "none", color: "red" }}
            >
Forget Password?            </Link>
          </label>
        </Col>

        <label className="mx-auto my-4">
          <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
login as an Admin            </span>
          </Link>

          <Link to="/user/allorders" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger mx-3">
login as a user            </span>
          </Link>
        </label>
      </Row>
      <ToastContainer></ToastContainer>
    </Container>
  );
};

export default LoginPage;
