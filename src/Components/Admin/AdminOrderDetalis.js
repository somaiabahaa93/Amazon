import React from 'react'
import { Row,Col } from 'react-bootstrap'
import CartItem from '../Cart/CartItem'
import { ToastContainer } from 'react-toastify';

import { useParams } from 'react-router-dom'
import UserAllOrderItem from '../User/UserAllOrderItem'
import OrderPayCashHook from '../../hook/Checkout/OrderPayCashHook'
import GetOrderDetailsHook from '../../hook/Admin/GetOrderDetailsHook'
import ChangeOrderStateHook from '../../hook/Admin/ChangeOrderStateHook'

const AdminOrderDetalis = () => {
    const {id}=useParams()
    const   [data] =GetOrderDetailsHook(id)
    const [onChangePaid,handleOnChangePaid,onChangeDeliver,handleOnChangeDeliverd]=ChangeOrderStateHook(id)

    // console.log("data>>>>>>>>>>>>>>>>>>>>>>>>>..",data)
    // const formDate=(dateString)=>{
    //     const options={year:"numeric",month:"numeric",day:"numeric"}
    //     return new Date(dateString).toLocaleDateString(undefined, options)
    // }

    return (
        <div>
            {/* <div className='admin-content-text'>  Date of order is {formDate(data.createdAt)}</div> */}
         <UserAllOrderItem orderItem={data}/>

            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2">تفاصيل العميل</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
Name:                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
{data?.user?.name}                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
Phone:                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
{data?.user?.phone}                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
Email:                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
{data?.user?.email}                    </div>
                </Col>
               
                <div className="d-flex mt-2 justify-content-center">
                    <div>
                    <select
                        name="deliver"
                        onChange={onChangeDeliver}

                        id="deliver"
                        className="select input-form-area mt-1  text-center px-2 w-50">
                        <option value="0">Deliverd </option>
                        <option value="true">Done </option>
                        <option value="false"> No</option>
                    </select>
                    <button onClick={handleOnChangeDeliverd}  className="btn-a px-3 d-inline mx-2 ">save </button>

                    <select
                        name="paid"
                        id="paid"
                        onChange={onChangePaid}
                        className="select input-form-area mt-1  text-center px-2 w-50">
                        <option value="0">Payment </option>
                        <option value="true">Done </option>
                        <option value="false"> No</option>

                       
                    </select>
                    <button onClick={handleOnChangePaid} className="btn-a px-3 d-inline mx-2 ">save </button>
<ToastContainer/>
                    </div>
                    
                </div>
            </Row>
        </div>
    )
}

export default AdminOrderDetalis
