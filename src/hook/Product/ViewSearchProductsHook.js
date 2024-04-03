import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllProducts,
  getAllProductPage,
  getAllProductsSearch,
} from "../../Redux/actions/productActions";
const ViewSearchProductHook = () => {
  const allProducts = useSelector((state) => state.allProducts.allproducts);

  const dispatch = useDispatch();

  let limit = 7;
  let keyword = "";
  let queryCat = "";
  let queryBrand = "";
  let priceTo = "";
  let priceFrom = "";
  let priceStringFrom = "";
  let priceStringTo = "";
  const getProducts = async () => {
    getStorage();
    sortData();
    await dispatch(
      getAllProductsSearch(
        `limit=${limit}&keyword=${keyword}&sort=${sort}&${queryCat}&${queryBrand}${priceStringTo}${priceStringFrom}`
      )
    );
  };
  useEffect(() => {
    getProducts();
  }, []);
  //  console.log("allProd",allProducts)
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

  try {
    if (allProducts.results) result = allProducts.results;
    else result = [];
  } catch (e) {}

  // pagination
  const onPress = async (page) => {
    getStorage();
    sortData();
  
    
    await dispatch(
      getAllProductsSearch(
        `limit=${limit}&keyword=${keyword}&page=${page}
        &sort=${sort}&${queryCat}&${queryBrand}
        ${priceStringFrom}${priceStringTo}`
      )
    );
  };

  // sorting data
  let sortType = "";
  let sort = "";
  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }

    if (sortType === "higher price") {
      sort = "-price";
    } else if (sortType === "lower price") {
      sort = "+price";
    }
    if (sortType === "more sold") {
      sort = "+sold";
    } else if (sortType === "more rate ") {
      sort = "-ratingQuantity";
    }
  };

  // getting data in localStorage
  const getStorage = () => {
    if (localStorage.getItem("searchWord")) {
      keyword = localStorage.getItem("searchWord");
    }

    if (localStorage.getItem("catChecked")) {
      queryCat = localStorage.getItem("catChecked");
    }

    if (localStorage.getItem("brandChecked")) {
      queryBrand = localStorage.getItem("brandChecked");
    }
    if (localStorage.getItem("priceFrom")) {
      priceFrom = localStorage.getItem("priceFrom");
    }
    if (localStorage.getItem("priceTo")) {
      priceTo = localStorage.getItem("priceTo");
    }

    if (priceFrom === "" || priceFrom <= 0) {
      priceStringFrom = "";
    } else {
      priceStringFrom = `&price[gt]=${priceFrom}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceStringTo = "";
    } else {
      priceStringTo = `&price[lt]=${priceTo}`;
    }
  };

  return [items, pagination, onPress, getProducts, result];
};

export default ViewSearchProductHook;
