import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
const UserAllOrderCard = ({item}) => {
    console.log("onnnnnnnnnnnnnnnnnnne",item)
    return (
        <div>
            <Row className="d-flex mb-2">
                <Col xs="3" md="2" className="d-flex justify-content-start">
                    <img width="93px" height="120px" src={item.product.imageCover} alt="" />
                </Col>
                <Col xs="8" md="6">
                    <div className="d-inline pt-2 cat-title">
                        {item.product.title}
                    </div>
                    <div className="d-inline pt-2 cat-rate me-2">{item.product.ratingAverage||0}</div>
                    <div className="rate-count d-inline p-1 pt-2">({item.product.reviews||0} ) review</div>
                    <div className="mt-3">
                        <div className="cat-text  d-inline">quantity</div>
                        <input
                        value={item.quantity}
                            className="mx-2 "
                            type="number"
                            style={{ width: "40px", height: "25px" }}
                        />
                         <div
                    className="color ms-2 "
                    style={{ backgroundColor: item.color, }}
                  ></div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderCard
