import React from 'react'

import  { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  getAllBrands,
  getAllBrandPage,
} from "../../Redux/actions/brandActions";

const AllBrandPageHook = () => {
    const brands = useSelector((state) => state.allBrand.brands);
    const loading = useSelector((state) => state.allBrand.loading);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllBrands(5));
    }, []);
    console.log("ddddd", brands);
    let pageCount = 0;
    if (brands.paginationResult)
      pageCount = brands.paginationResult.numberOfPages;
    const getPage = (page) => {
      dispatch(getAllBrandPage(page));
  
      console.log("page", page);
    };
    return [brands,loading,getPage,pageCount]
}

export default AllBrandPageHook
