import { Container, Row, Spinner } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';

import React from "react";
import HomeCategoryHook from '../../hook/Category/HomeCategoryHook';
const HomeCategory = () => {
const [categories,loading,colors]=HomeCategoryHook()
    
    return (
        <Container>
            <SubTiltle title="categories" btntitle="more" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    loading===false? (categories.data?(categories.data.slice(0,5).map((item,index)=>{
                        return (<CategoryCard id={item._id} title={item.name} key={index} img={item.image} background={colors[index]} />
                        )
                    })):<div>there are no data now</div>): <div className='text-center'> <Spinner animation="border" variant="primary" /></div> 

                    
                }
               
            </Row>
        </Container>
    )
}

export default HomeCategory
