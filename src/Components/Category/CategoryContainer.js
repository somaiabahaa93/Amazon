import CategoryCard from "./../Category/CategoryCard";

import { Container, Row, Spinner } from "react-bootstrap";

import React from "react";

const CategoryContainer = ({ categories, loading }) => {
  const colors = ["#ffd3e8", "#f4dba5", "#55cfdf", "#0034ff", "#ffd3e8"];

  return (
    <Container>
      <div className="admin-content-text mt-2 "> All Categories</div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          categories.data ? (
            categories.data.map((item, index) => {
              return (
                <CategoryCard
                id={item._id}
                  title={item.name}
                  key={index}
                  img={item.image}
                  background={colors[Math.floor(Math.random() * 6) + 1]}
                />
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

export default CategoryContainer;
