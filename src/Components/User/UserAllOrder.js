import React from 'react'
import {  Row } from 'react-bootstrap'
import Pagination from '../Uitily/Pagination'
import UserAllOrderItem from './UserAllOrderItem'
import AllUserOrdersHook from '../../hook/User/AllUserOrdersHook'

const UserAllOrder = () => {
    const user=JSON.parse(localStorage.getItem("user"))
    const [data,result,paginate,onPress]=AllUserOrdersHook()
    return (
        <div>
        <div className="admin-content-text pb-4">  Welcome  {user.name} </div>
        <h5>  {result} orders  </h5>
        <Row className='justify-content-between'>
            {data?.length>=1?(data.map((orderItem,index)=>{
                return <UserAllOrderItem key={index} orderItem={orderItem} />
            })):(<h2>no orders now </h2>)}
         
        </Row>
        <Pagination pageCount={paginate?.numberOfPages} onPress={onPress} />
        </div>
    )
}

export default UserAllOrder
