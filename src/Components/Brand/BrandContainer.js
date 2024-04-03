import React from 'react'
import BrandCard from './BrandCard'

import { Container, Row, Spinner } from 'react-bootstrap';
const BrandContainer = ({brands,loading}) => {
    return (
        <Container>
            <div className="admin-content-text mt-2 ">كل الماركات</div>
            <Row className='my-1 d-flex justify-content-between'>
               
                {loading === false ? (
          brands.data ? (
            brands.data.map((item, index) => {
              return (
                <BrandCard
                  title={item.name}
                  key={index}
                  img={item.image}
                  id={item._id}
                 
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
    )
}

export default BrandContainer
