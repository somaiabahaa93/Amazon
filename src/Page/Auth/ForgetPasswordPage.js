import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/Auth/LoginHook'
import { ToastContainer } from 'react-toastify';
import ForgetPasswordHook from '../../hook/Auth/ForgetPasswordHook';

const ForgetPasswordPage = () => {
const   [ email, changeEmail, onSubmt]=ForgetPasswordHook()
    return (
            <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">اعاده كلمه السر</label>
                        <input
                            placeholder="الايميل..."
                            type="text"
                            className="user-input my-3 text-center mx-auto"
                            value={email}
                            onChange={changeEmail}
                        />
                        
                        <button onClick={onSubmt} className="btn-login mx-auto mt-4">الحصول عالكود </button>
                        



                    </Col>


                   
                </Row>
                <ToastContainer></ToastContainer>

            </Container>
    )
}

export default ForgetPasswordPage
