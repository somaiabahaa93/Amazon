import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProducts = ({products}) => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع المنتجات</div>
            <Row className='justify-content-start'>
                {products?(products.map((item)=>{
                    return  <AdminAllProductsCard item={item}  /> 
                })):null}
               
               
            </Row>
            
        </div>
    )
}

export default AdminAllProducts
