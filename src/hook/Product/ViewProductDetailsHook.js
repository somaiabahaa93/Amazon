import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOneProduct } from '../../Redux/actions/productActions'
import { getOneBrand } from '../../Redux/actions/brandActions'
import { getOneCategory } from '../../Redux/actions/categoryActions'
import mobile from '../../images/mobile.png'
import { getProductLike } from '../../Redux/actions/productActions'

const ViewProductDetailsHook = (id) => {
    console.log("hook",id)
const product=useSelector((state)=>state.allProducts.oneProduct)
const category=useSelector((state)=>state.allCategory.oneCategory)
const brand=useSelector((state)=>state.allBrand.oneBrand)
const productLike=useSelector((state)=>state.allProducts.productsLike)




const dispatch=useDispatch()
useEffect(()=>{
 dispatch(getOneProduct(id))
},[])


  console.log("proLIke",productLike) 
  console.log("pro",product) 

let item=[]
if(product)
  item= product.data
  else 
  item=[]
  useEffect(()=>{
    try{ if(item.brand)
    {
        dispatch(getOneBrand(item.brand))
    }
if(item.category)
{
    dispatch(getOneCategory(item.category))
    dispatch(getProductLike(item.category))
}}catch(e){}
   
 

   },[item])

  
//   images 
let images=[]
if (item)
{
    if(item.images)
   images= item.images.map((img)=>{return {original:img}})
}else 
{images=[{ogiginal:`${mobile}`}]}

 //to show category item
 let cat = [];
 if (category.data)
     cat = category.data;
 else
     cat = []


 //to show category item
 let proBrand = [];
 if (brand.data)
 proBrand = brand.data;
 else
 proBrand = [] 
 
//  productsLike
let prods=[]
    if(productLike?.data)
    prods=productLike.data.slice(0,4)
    else 
    prods=[]

 return [item,images,cat,proBrand,prods]
}

export default ViewProductDetailsHook

