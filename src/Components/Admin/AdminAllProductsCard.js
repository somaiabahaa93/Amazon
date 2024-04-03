import { React, useState } from "react";
import { Col, Card, Row, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneProduct } from "../../Redux/actions/productActions";
const AdminAllProductsCard = ({ item }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleRemove = async () => {
    await dispatch(deleteOneProduct(item._id));
    setShow(false);

    window.location.reload();
  };
  const edit=()=>{
    console.log("edit",item._id)
  }
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div
              onClick={() => setShow(true)}
              className="d-inline item-delete-edit"
            >
              ازاله
            </div>
            <Link to={`/admin/editproducts/${item._id}`} style={{ textDecoration: "none" }}>
            <div onClick={edit} className="d-inline item-delete-edit">تعديل</div>
            </Link>
          </Col>
        </Row>
        <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={item.imageCover}
          />
          <Card.Body>
            <Card.Title>
              <div className="card-title">{item.title} </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">{item.ratingQuantitiy}</div>
                <div className="d-flex">
                  <div className="card-price">
                    
                {item.priceAfterDiscount?
                (<div><span style={{textDecoration:"line-through"}}> ({item.price})</span>({item.priceAfterDiscount})</div>):  <div>{item.price}</div>}
                  </div>
                  <div className="card-currency mx-1">جنيه</div>

                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this product for sure ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRemove}>
            delete Product{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default AdminAllProductsCard;
