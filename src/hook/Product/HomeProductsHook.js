import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts } from '../../Redux/actions/productActions'
const HomeProductsHook = () => {
// console.log("proooo",allProducts)
const dispatch=useDispatch()
useEffect(()=>{
 dispatch(getAllProducts())
},[])
const allProducts=useSelector((state)=>state.allProducts.allproducts)

 console.log("allProd",allProducts) 
let items=[]
if(allProducts?.data)
{
  items= allProducts.data.slice(0,4)
  // console.log(allProducts)

}
  else 
  items=[]
 return [items]
}

export default HomeProductsHook
