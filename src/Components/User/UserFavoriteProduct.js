import React from 'react'
import { Row } from 'react-bootstrap';
import ProductCard from './../Products/ProductCard';
import Pagination from '../Uitily/Pagination'
import CardProductsContainer from '../Products/CardProductsContainer';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getAllUserWIshList } from "../../Redux/actions/wishListActions";

import { useEffect } from "react";
const UserFavoriteProduct = () => {
    const resAll = useSelector((state) => state.wishListReducer.allWishList);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      getAll()
    },[])
    // get all user wishlist 
  const getAll=async()=>{
    setLoading(true)
    await dispatch(getAllUserWIshList())
    setLoading(false)
  }
    return (
        <div>
            <div className="admin-content-text pb-4">قائمة المفضلة</div>
            <Row className='justify-content-start'>
<CardProductsContainer products={resAll.data} title="" btntitle=""/>               
            </Row>
        </div>
    )
}

export default UserFavoriteProduct
