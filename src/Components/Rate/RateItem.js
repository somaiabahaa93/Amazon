import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import rate from "../../images/rate.png";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit.png";
import { ToastContainer } from "react-toastify";
import ReactStars from "react-rating-stars-component";


import DeleteReviewHook from "../../hook/Raview/DeleteReviewHook";
import UpdateRateHook from "../../hook/Raview/UpdateRateHook";
const RateItem = ({ review }) => {
  const [isUser, showDelete, handleClose, handleRemove, handleShow] =
    DeleteReviewHook(review);
  const [
    showEdit,
    handleCloseEdit,
    handleUpdate,
    handleShowEdit,
    onChangeRateText,
    rateText,
    onChangeRateValue,
    rateValue,
  ] = UpdateRateHook(review);

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: rateValue,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: onChangeRateValue
};
  return (
    
    <div>
      
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this review for sure ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRemove}>
            delete Review{" "}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="font w-100"
            value={rateText}
            onChange={onChangeRateText}
          />
                      <ReactStars {...setting} />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            update Review{" "}
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="mt-3">
        <Col className="d-felx me-5">
          <div className="rate-name  d-inline ms-2">{review.user.name}</div>
          <img className="" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{review.rating}</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <div className="rate-description  d-inline ms-2">
            {review.review}{" "}
          </div>
          {isUser === true ? (
            <div className="d-inline d-flex justify-content-end">
              <img
                src={deleteicon}
                width="20px"
                height="20px"
                style={{ cursor: "pointer" }}
                alt="delete"
                onClick={handleShow}
              />

              <img
                src={editicon}
                width="20px"
                height="20px"
                onClick={handleShowEdit}
                style={{ cursor: "pointer" }}
                alt="delete"
              />
            </div>
          ) : null}
        </Col>
        <ToastContainer></ToastContainer>
      </Row>
    </div>
  );
};

export default RateItem;
