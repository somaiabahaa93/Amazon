import React from "react";
import { useState,useEffect } from "react";
import ViewSearchProductHook from "../Product/ViewSearchProductsHook";
const NavbarSearchHook = () => {
  const [items, pagination, onPress, getProducts, result] =
    ViewSearchProductHook();
  const [searchWord, setSearchWord] = useState("");
  const onChangeSerachWord = (e) => {
    setSearchWord(e.target.value);
    localStorage.setItem("searchWord",e.target.value)
  };

  useEffect(()=>{
    setTimeout(()=>{
        getProducts()

    },1000)
  },[searchWord])
  return [searchWord, onChangeSerachWord];
};

export default NavbarSearchHook;
