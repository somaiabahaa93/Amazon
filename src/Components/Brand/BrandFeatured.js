import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import BrandCard from "./BrandCard";
import React from "react";
import HomeBrandHook from "../../hook/Brand/HomeBrandHook";


const BrandFeatured = ({ title, btntitle }) => {
const [brands,loading]=HomeBrandHook()

  return (
    <Container>
      <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          brands?.data ? (
            brands.data.slice(0, 5).map((item, index) => {
              return (
                <BrandCard id={item._id} title={item.name} key={index} img={item.image} />
              );
            })
          ) : (
            <div>there are no data now</div>
          )
        ) : (
          <div className="text-center">
            {" "}
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default BrandFeatured;
