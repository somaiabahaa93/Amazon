import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getAllCategory } from "../../Redux/actions/categoryActions";
import { useDispatch } from "react-redux";
import AllCategoryPageHook from "../../hook/Category/AllCategoryPageHook";
import { Link } from "react-router-dom";

const CategoryHeader = () => {
  const [categories, loading, pageCount, getPage] = AllCategoryPageHook();

  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">الكل</div>
            {categories.data
              ? categories?.data.slice(0,8).map((item, index) => {
                  return (
                    <Link style={{textDecoration:"none"}} to={`/products/category/${item._id}`}>  <div key={index} className="cat-text-header ">
                    {item.name}
                  </div></Link>
                   
                  );
                })
              : null}
            <Link to={"/allcategory"} style={{textDecoration:"none"}}>
              {" "}
              <div className="cat-text-header">المزيد</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
