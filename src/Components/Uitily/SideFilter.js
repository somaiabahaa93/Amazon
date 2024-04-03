import React from "react";
import { Row } from "react-bootstrap";
import SideFilterHook from "../../hook/search/SideFilterHook";

const SideFilter = () => {
  const [
    allCategories,
    allBrands,
    onCategoryChange,
    onBrandChange,
    priceFrom,
    priceTO,
  ] = SideFilterHook();
  const priceFromValue = localStorage.getItem("priceFrom");
  const priceToValue = localStorage.getItem("priceTo");

  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">الفئة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {allCategories
            ? allCategories.map((cat, index) => {
                return (
                  <div key={index} className="d-flex mt-2">
                    <input
                      onChange={onCategoryChange}
                      type="checkbox"
                      value={cat._id}
                    />
                    <div className="filter-sub me-2 ">{cat.name}</div>
                  </div>
                );
              })
            : null}
        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">الماركة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {allBrands
            ? allBrands.map((brand, index) => {
                return (
                  <div key={index} className="d-flex mt-2">
                    <input
                      onChange={onBrandChange}
                      type="checkbox"
                      value={brand._id}
                    />
                    <div className="filter-sub me-2 ">{brand.name}</div>
                  </div>
                );
              })
            : null}
        </div>

        <div className="filter-title my-3">السعر</div>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
            className="m-2 text-center"
            value={priceFromValue}
            type="number"
            onChange={priceFrom}
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
            onChange={priceTO}
            value={priceToValue}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
