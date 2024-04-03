import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/Auth/LoginHook'
import { ToastContainer } from 'react-toastify';
import ForgetPasswordHook from '../../hook/Auth/ForgetPasswordHook';
import VerifyPasswordHook from '../../hook/Auth/VerifyPasswordHook';

const VerifyPasswordPage = () => {
const   [ code, changeCode, onSubmt]=VerifyPasswordHook()
    return (
            <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">الكود</label>
                        <input
                            placeholder="الكود..."
                            type="text"
                            className="user-input my-3 text-center mx-auto"
                            value={code}
                            onChange={changeCode}
                        />
                        
                        <button onClick={onSubmt} className="btn-login mx-auto mt-4">ارسال الكود </button>
                        



                    </Col>


                   
                </Row>
                <ToastContainer></ToastContainer>

            </Container>
    )
}

export default VerifyPasswordPage
