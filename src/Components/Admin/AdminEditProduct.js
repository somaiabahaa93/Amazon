import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import { ToastContainer } from 'react-toastify';
import notify from "../../hook/notificationHook";


import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/actions/categoryActions";

import add from "../../images/add.png";
import { getAllBrands } from "../../Redux/actions/brandActions";
import { createProduct, getOneProduct } from "../../Redux/actions/productActions";
import { getSubCateogries } from "../../Redux/actions/subCategoryActions";
import EditProductHook from "../../hook/Product/EditProductHook";
import { useParams } from 'react-router-dom';
const AdminEditProduct = () => {
  const {id}=useParams()
 
const [images,setImages,proName,onChangeProductName,
  proDesc,priceAfter,priceBefor,qty,onSelectCat,categories,
  onChangeProductDesc,onChangePriceAfter,onChangePriceBefor,onChangeProductQnty
,onChangeProductColor,options,onSelectSubCategory,onRemoveSubCAtegory,colors,onSelectBrand,brands
,showColor,changeColor,handleSubmit,removeColor,catId,brandId]
  =EditProductHook(id)
 
  
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> تعديل منتج </div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            max={4}
            allowCrop={false}
            theme={"light"}
          />{" "}
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
            value={proName}
            onChange={onChangeProductName}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            value={proDesc}
            onChange={onChangeProductDesc}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            value={priceBefor}
            onChange={onChangePriceBefor}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر المنتج"
            value={priceAfter}
            onChange={onChangePriceAfter}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder=" الكميه المتاحه"
            value={qty}
            onChange={onChangeProductQnty}
          />
          <select
            name="languages"
            id="lang"
            value={catId}
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectCat}
          >
            <option value="0">التصنيف الرئيسي</option>
            {categories.data
              ? categories.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelectSubCategory}
            onRemove={onRemoveSubCAtegory}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectBrand}
            value={brandId}

          >
            <option value="0">الماركة</option>
            {brands.data
              ? brands.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div  className="mt-1 d-flex">
            { colors?(colors.map((color,index)=>{return( 
            <div
            onClick={()=>removeColor(color)} className="color ms-2 border  mt-1"
              style={{ backgroundColor: color }}
            ></div>)})):null}
           
            
            <img
              onClick={onChangeProductColor}
              src={add}
              alt=""
              width="30px"
              height="35px"
              className=""
            />
            {showColor === true ? (
              <CompactPicker onChangeComplete={changeColor} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
      </Row>
      <ToastContainer></ToastContainer>

    </div>
  );
};

export default AdminEditProduct;
