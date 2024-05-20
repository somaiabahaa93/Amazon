import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';

import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../hook/Product/ViewProductDetailsHook";
import AddProductToCartHook from "../../hook/cart/AddProductToCartHook";
const ProductText = () => {
  const { id } = useParams();
  const [item, images, cat, proBrand, prods] = ViewProductDetailsHook(id);
 const [colorIndex,getIndex,handleAddingProduct]=AddProductToCartHook(id,item)
console.log("?????????????????????????????",item)
  return (

    <div>
      <Row className="mt-2">
        <div className="cat-text">{cat.name}</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {item?.title}
            <div className="cat-rate d-inline mx-3">
              {item?.ratingsQuantity}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{proBrand.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item?.availableColors
            ? item?.availableColors.map((color, index) => {
                return (
                  <div
                    onClick={() => getIndex(index, color)}
                    className="color ms-2 "
                    style={{ backgroundColor: color, border: index===colorIndex?("solid 1px black"):"none" }}
                  ></div>
                );
              })
            : null}
                      <div className="cat-text d-inline">الكمية المتاحه :{item?.quantity}</div>

        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {item?.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          
            {item?.price} جنية
            {item?.priceAfterDiscount?(
              <div className="product-price d-inline px-3 py-3 border">  
              <span style={{textDecoration:"line-through"}}> ({item?.price})</span>{item.priceAfterDiscount}$
              </div>
              
            ):<div className="product-price d-inline px-3 py-3 border">{item?.price}</div>}
        
          <div onClick={handleAddingProduct} className="product-cart-add px-3 py-3 d-inline mx-3">
            اضف للعربة
          </div>
        </Col>
<ToastContainer/>
      </Row>
    </div>
  );
};

export default ProductText;
