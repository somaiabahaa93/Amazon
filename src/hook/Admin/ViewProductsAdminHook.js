import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts,getAllProductPage } from '../../Redux/actions/productActions'
const ViewProductsAdminHook = (id) => {
// console.log("proooo",allProducts)
const dispatch=useDispatch()
useEffect(()=>{
 dispatch(getAllProducts(10))
},[])
const allProducts=useSelector((state)=>state.allProducts.allproducts)

 console.log("allProd",allProducts) 
 let items=[]
 let pageCount=[]
 try{
    if(allProducts.data)
    {
      items= allProducts.data
      // console.log(allProducts)
    }
      else 
      items=[]
      if(allProducts.paginationResult)
      {
        pageCount=allProducts.paginationResult.numberOfPages
      }
      else 
      pageCount=[]
  
  
    }
      catch(e){}
      const getPage = (page) => {
        dispatch(getAllProductPage(page,10));
    
        console.log("page", page);
      };

     
 return [items,pageCount,getPage]
}

export default ViewProductsAdminHook
