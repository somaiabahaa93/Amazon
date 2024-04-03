import React from 'react'
import { Row,Col } from 'react-bootstrap'
import AddAddressHook from '../../hook/User/AddAddressHook'
import { ToastContainer } from 'react-toastify'

const UserAddAddress = () => {
    const [phone,addressMain,addressDetails,changeAddressDetails,changeMainAddress,changePhone, onSubmt]=AddAddressHook()

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                        value={addressMain}
                        onChange={changeMainAddress}
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="العنوان بالتفصيل"
                        value={addressDetails}
                        onChange={changeAddressDetails}
                    />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="رقم الهاتف"
                        value={phone}
                        onChange={changePhone}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={onSubmt} className="btn-save d-inline mt-2 ">اضافة عنوان</button>
                </Col>
                <ToastContainer></ToastContainer>
            </Row>
        </div>
    )
}

export default UserAddAddress
