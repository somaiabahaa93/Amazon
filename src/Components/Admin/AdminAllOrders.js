import React from 'react'
import {  Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'
import AllUserOrdersHook from '../../hook/User/AllUserOrdersHook'
import Pagination from '../Uitily/Pagination'


const AdminAllOrders = () => {
    const [data,result,paginate,onPress]=AllUserOrdersHook()
    // console.log("allOrders>>>>>>>>>>>>>>>>>>>>>>>>>.",paginate)

    return (
        <div>
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <Row className='justify-content-start'>
            
                {data?.length>=1?(data.map((orderItem,index)=>{
                return     <AdminAllOrdersItem  key={index} orderItem={orderItem} />
            })):(<h2>no orders now </h2>)}
            </Row>
            <Pagination pageCount={paginate?.numberOfPages} onPress={onPress} />

        </div>
    )
}

export default AdminAllOrders
