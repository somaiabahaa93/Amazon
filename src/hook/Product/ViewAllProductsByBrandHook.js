import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    getAllProductByBrand,
  getAllProductByCategory,
} from "../../Redux/actions/productActions";
const ViewAllProductsByBrandHook = (brandId) => {
    const allProducts = useSelector((state) => state.allProducts.allproductsbybrand);

    const dispatch = useDispatch();
  
    let limit = 1;

    const getProducts = async () => {
      await dispatch(
        getAllProductByBrand('',limit,brandId)
      );
    };
    useEffect(() => {
      getProducts();
    }, []);
     console.log("allProdfor cccc?????????",allProducts)
    let items = [];
    let pagination = [];
    let result = [];
    try {
      if (allProducts) items = allProducts.data;
      else items = [];
    } catch (e) {}
  
    try {
      if (allProducts.paginationResult)
        pagination = allProducts.paginationResult.numberOfPages;
      else pagination = [];
    } catch (e) {}


    const onPress = async (page) => {
      ;
      
        
        await dispatch(
          getAllProductByCategory(page,limit,brandId)
        );
      };
  
  
    return [items,pagination,onPress]
}

export default ViewAllProductsByBrandHook
