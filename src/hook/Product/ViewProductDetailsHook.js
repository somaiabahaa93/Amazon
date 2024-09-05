import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneProduct } from "../../Redux/actions/productActions";
import { getOneBrand } from "../../Redux/actions/brandActions";
import { getOneCategory } from "../../Redux/actions/categoryActions";
import mobile from "../../images/mobile.png";
import { getProductLike } from "../../Redux/actions/productActions";

const ViewProductDetailsHook = (id) => {
  console.log("hook", id);
  const product = useSelector((state) => state.allProducts.oneProduct);
  const category = useSelector((state) => state.allCategory.oneCategory);
  const brand = useSelector((state) => state.allBrand.oneBrand);
  const productLike = useSelector((state) => state.allProducts.productsLike);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);

  console.log("pro", product);

  let item = [];
  let imageCover = "";
  if (product) item = product.data;
  else item = [];
  useEffect(() => {
    try {
      if (item.brand) {
        dispatch(getOneBrand(item.brand));
      }
      if (item.category) {
        dispatch(getOneCategory(item.category));
        dispatch(getProductLike(item.category));
      }
    } catch (e) {}
  }, [item]);

  //   images
  let images = [];
  if (item) {
    imageCover = item.imageCover;
    if (item.images) {
      images = item?.images?.map((img) => {
        return { original: img };
      });
    }
    if (item.images.length < 1) {
      images = [{ original: `${imageCover}` }];
    }
  } else {
    images = [{ original: `${imageCover}` }];
  }
  
  let cat = [];
  if (category.data) cat = category.data;
  else cat = [];

  //to show category item
  let proBrand = [];
  if (brand.data) proBrand = brand.name;
  else proBrand = [];

  //  productsLike
  let prods = [];
  if (productLike?.data) prods = productLike.data.slice(0, 4);
  else prods = [];

  return [item, imageCover, images, cat, proBrand, prods];
};

export default ViewProductDetailsHook;
