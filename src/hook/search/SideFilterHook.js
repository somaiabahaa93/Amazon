import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBrands } from "../../Redux/actions/brandActions";
import { getAllCategory } from "../../Redux/actions/categoryActions";
import { useState } from "react";
import ViewSearchProductHook from "../Product/ViewSearchProductsHook";

const SideFilterHook = () => {
  const [items, pagination, onPress, getProducts, result] =
    ViewSearchProductHook();
  const categories = useSelector((state) => state.allCategory.category);
  const brands = useSelector((state) => state.allBrand.brands);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrands());
  }, []);

  let allCategories = [];
  if (categories.data) allCategories = categories.data;

  let allBrands = [];
  if (brands.data) allBrands = brands.data;

  const [catCkecked, setCatCkecked] = useState([]);
  const [brandCkecked, setBrandCkecked] = useState([]);
  const [pFrom, setPriceFrom] = useState(0);
  const [pTo, setPriceTo] = useState(0);


  const onCategoryChange = (e) => {
    if (e.target.value === "0") {
      setCatCkecked([]);
    } else {
      if (e.target.checked === true) {
        setCatCkecked([...catCkecked, e.target.value]);
      } else {
        const newArr = catCkecked.filter((val) => {
          return val !== e.target.value;
        });
        setCatCkecked([...newArr]);
      }
    }
  };


//   get data after check for category change 
  useEffect(() => {
    const  quertCat = catCkecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("catChecked", quertCat);
    setTimeout(() => {
        getProducts()
    }, 1000);
  }, [catCkecked]);

  const onBrandChange = (e) => {
    if (e.target.value === "0") {
        setBrandCkecked([]);
      } else {
        if (e.target.checked === true) {
          setBrandCkecked([...brandCkecked, e.target.value]);
        } else {
          const newArrB = brandCkecked.filter((val) => {
            return val !== e.target.value;
          });
          setBrandCkecked([...newArrB]);
        }
      }  };

      useEffect(() => {
        const  quertBrand = brandCkecked.map((val) => "brand[in][]=" + val).join("&");
        localStorage.setItem("brandChecked", quertBrand);
        setTimeout(() => {
            getProducts()
        }, 1000);
      }, [brandCkecked]);

    //   changing in price 
    const priceFrom=(e)=>{
        localStorage.setItem("priceFrom",pFrom)
        setPriceFrom(e.target.value)
console.log(e.target.value)
    }

    const priceTo=(e)=>{
        console.log(e.target.value)
        setPriceTo(e.target.value)
        localStorage.setItem("priceTo",pTo)
    }

    useEffect(()=>{
        getProducts()
    },[pFrom,pTo])

  return [allCategories, allBrands, onCategoryChange, onBrandChange,priceFrom,priceTo];
};

export default SideFilterHook;
