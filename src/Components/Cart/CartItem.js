import React from 'react'
import { Button, Col,Modal,Row } from 'react-bootstrap'
import deleteicon from '../../images/delete.png'
import DeleteCartHook from '../../hook/cart/DeleteCartHook'
const CartItem = ({item}) => {
  const [handelDeleteCart, show, handleClose, handleShow, handelDeleteItem, itemCount, onChangeCount, handeleUpdateCart]=DeleteCartHook(item)
  console.log("oneItem>>>>>>>>>>>>>>>",item)
    return (
        <Col xs="12" className="cart-item-body my-2 d-flex px-2">

          {/* modal for deleting  */}
          <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this product for sure ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelDeleteItem}>
            delete Product{" "}
          </Button>
        </Modal.Footer>
      </Modal>
        <img width="160px" height="197px" src={item.product.imageCover} alt="" />
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">{item.product.category?.name}</div>
              <div onClick={handleShow} className="d-flex pt-2 " style={{ cursor: "pointer" }}>
                <img src={deleteicon} alt="" width="20px" height="24px" />
                <div  className="cat-text d-inline me-2">Delete</div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
{item.product.title || ''}              
              </div>
              <div className="d-inline pt-2 cat-rate me-2">{item.product.ratingsAverage || 0}</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="cat-text d-inline">Brand</div>
              <div className="barnd-text d-inline mx-1">{item.product.brand?.name} </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1 d-flex">
              {item.color?( <div
                className="color ms-2 border"
                style={{ backgroundColor: item.color }}></div>):null}
             
            </Col>
          </Row>
  
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
                <div className="cat-text mt-2  d-inline">Quantity</div>
                <input
                  className="mx-2 text-center"
                  type="number"
                  style={{ width: "60px", height: "40px" }}
                  value={itemCount}
                  onChange={onChangeCount}
                />
                <Button onClick={handeleUpdateCart} className='btn btn-dark'>Apply</Button>
              </div>
              <div className="d-inline pt-2 barnd-text"> {item.price}$</div>
            </Col>
          </Row>
        </div>
      </Col>
    )
}

export default CartItem
