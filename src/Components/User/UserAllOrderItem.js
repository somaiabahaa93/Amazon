import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import UserAllOrderCard from './UserAllOrderCard'
const UserAllOrderItem = ({orderItem}) => {
    const formDate=(dateString)=>{
        const options={year:"numeric",month:"numeric",day:"numeric"}
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
    return (
        <div className="user-order mt-2">
            <Row>
            <div className='admin-content-text'>  Date of order is {formDate(orderItem.createdAt)}</div>
            </Row>
            {orderItem.cartItems?(orderItem.cartItems.map((item,index)=>{
                return              <UserAllOrderCard key={index} item={item} />

            })):(null)}
            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline">Deliverd</div>
                        <div className="d-inline mx-2 stat">{orderItem.isDeliverd === true?("deliverd"):("no")}</div>
                        <div className="d-inline">Paid</div>
                        <div className="d-inline mx-2 stat">{orderItem.isPaid === true?("Paid"):("no")}</div>
                        <div className="d-inline">Payment </div>
                        <div className="d-inline mx-2 stat">{orderItem.paymentMethodType === "cash"?("cash"):("card")}</div>
                    </div>
                      
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">${orderItem.
totalOrderPrice
} </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderItem
