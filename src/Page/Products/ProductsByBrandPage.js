import React from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import { useParams } from 'react-router-dom'
import ViewAllProductsByCategory from '../../hook/Product/ViewAllProductsByCategory'
import ViewAllProductsByBrandHook from '../../hook/Product/ViewAllProductsByBrandHook'

const ProductsByBrandPage = () => {
    const {id}=useParams()
    const  [items,pagination,onPress]=ViewAllProductsByBrandHook(id)
    let pageCount = 0;
    if(pagination)
     pageCount=pagination
    else 
    pageCount=0
  return (
    <div style={{ minHeight: '670px' }}>
    <Container>
      {items.length?(<Row className='d-flex flex-row'>
            
            <Col sm="12" xs="10" md="11">
                 <CardProductsContainer products={items} title="" btntitle=""/>
            </Col>
        </Row>):(<h2>no products added to this brand yet</h2>)}
        
            <Pagination pageCount={pageCount} onPress={onPress} />
    </Container>
</div>
  )
}

export default ProductsByBrandPage
