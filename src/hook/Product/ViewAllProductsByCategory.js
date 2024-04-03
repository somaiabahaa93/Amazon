import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllProductByCategory,
} from "../../Redux/actions/productActions";

const ViewAllProductsByCategory = (catId) => {
    const allProducts = useSelector((state) => state.allProducts.allproductsbycategory);

    const dispatch = useDispatch();
  
    let limit = 0;

    const getProducts = async () => {
      await dispatch(
        getAllProductByCategory('',limit,catId)
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
          getAllProductByCategory(page,limit,catId)
        );
      };
  
  
    return [items,pagination,onPress]
}



export default ViewAllProductsByCategory
