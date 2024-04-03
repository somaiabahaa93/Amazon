import React from 'react'
import { Row, Col, Modal, Button,  } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import deleteicon from '../../images/edit.png'
import UserProfileHook from '../../hook/User/UserProfileHook'
const UserProfile = () => {
    const 
    [onSubmit,
        user,
        show,
        handleClose,
        handleRemove,
        handleShow,
        name,
        phone,
        email,
        onChangeName,
        onChangeEmail,
        onChangePhone,
        password,
        confirmPassword,
        newPassword,
        onChangePassword,
        onChangeNewPassword,
        onChangeConfirmPassword,]
        =UserProfileHook()
    

    return (
        <div>

<Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <input
                            type="text"
                            className="input-form d-block mt-3 px-3"
                            placeholder="user name"
                            value={name}
                            onChange={onChangeName}
                        />
                         <input
                            type="phone"
                            className="input-form d-block mt-3 px-3"
                            placeholder="user phone"
                            value={phone}
                            onChange={onChangePhone}


                        /> <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="user email"
                        value={email}
                        onChange={onChangeEmail}


                    />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRemove}>
            edit my Data{" "}
          </Button>
        </Modal.Footer>
      </Modal>
            <div className="admin-content-text">الصفحه الشخصية</div>
            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">الاسم:</div>
                        <div className="p-1 item-delete-edit">{user?.name}</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div onClick={handleShow} className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> تعديل</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">رقم الهاتف:</div>
                        <div className="p-1 item-delete-edit">{user?.phone}</div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">الايميل:</div>
                        <div className="p-1 item-delete-edit">{user?.email}</div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs="10" sm="8" md="6" className="">
                        <div className="admin-content-text">تغير كملة المرور</div>
                        <input
                            type="password"
                            className="input-form d-block mt-1 px-3"
                            placeholder="ادخل كلمة المرور القديمة"
                            value={password}
                            onChange={onChangePassword}
                        />
                        <input
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="ادخل كلمة المرور الجديده"
                            value={newPassword}
                            onChange={onChangeNewPassword}
                        />
                         <input
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="تاكيد كلمة المرور الجديده"
                            value={confirmPassword}
                            onChange={onChangeConfirmPassword}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
                        <button onClick={onSubmit} className="btn-save d-inline mt-2 ">حفظ كلمة السر</button>
                    </Col>
                    <ToastContainer></ToastContainer>
                </Row>
            </div>
        </div>
    )
}

export default UserProfile
