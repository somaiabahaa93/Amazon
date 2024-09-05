import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'
import { useParams } from 'react-router-dom'
import ViewProductDetailsHook from '../../hook/Product/ViewProductDetailsHook'

const ProductDetalisPage = () => {
    const [item,imageCover,images,cat,proBrand,prods]=ViewProductDetailsHook()
    const {id}=useParams()
    if (item)
    {
        var rateQty=item.ratingsQuantity
        var rateAvg=item.ratingsAverage
    }
    
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis id={id} />
                <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
                <CardProductsContainer products={prods} title=" Products you may like " />
            </Container>
        </div>
    )
}

export default ProductDetalisPage
