import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import rate from '../../images/rate.png'
import Pagination from '../Uitily/Pagination';
import RateItem from './RateItem';
import RatePost from './RatePost';
import ViewAllReviewsProductHook from '../../hook/Raview/ViewAllReviewsProductHook';
import { useParams } from 'react-router-dom';
const RateContainer = ({rateAvg,rateQty}) => {
    const {id}=useParams()
    const [allReview,onPress]=ViewAllReviewsProductHook(id)
    if(allReview)
    {
        console.log("reviesw",allReview)
    }
    return (
        <Container className='rate-container'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">Reviews</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
                    <div className="rate-count d-inline p-1 pt-2">{rateQty?(rateQty):"0 review "}</div>
                </Col>
            </Row>
            <RatePost />
{allReview.data?(allReview.data.map((review,index)=>{
    return(<RateItem key={index} review={review} />)
})):(null)}
            
            
            

            <Pagination pageCount={allReview.paginationResult?allReview.paginationResult.numberOfPages:0 } onPress={onPress} />
        </Container>
    )
}

export default RateContainer
