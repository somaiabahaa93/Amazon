import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import notify from "../../hook/notificationHook";

import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/actions/categoryActions";

import add from "../../images/add.png";
import { getAllBrands } from "../../Redux/actions/brandActions";
import { createProduct } from "../../Redux/actions/productActions";
import { getSubCateogries } from "../../Redux/actions/subCategoryActions";

const AddProductHook = () => {
  const [images, setImages] = useState([]);
  const [proName, setProName] = useState("");
  const [proDesc, setProDesc] = useState("");
  const [priceBefor, setpriceBefor] = useState("price befor discount");
  const [priceAfter, setpriceAfter] = useState("price after discount");
  const [qty, setQty] = useState("available quantity  ");
  const [catId, setCatId] = useState("");
  const [loading, setLoading] = useState(true);

  const [brandId, setBrandId] = useState("");
  const [subCatID, setSubCatId] = useState([]);
  const [options, setOptions] = useState([]);

  const [selectedSubIds, setSelectedSubIds] = useState("");

  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([]);

  //   get all categories
  const categories = useSelector((state) => state.allCategory.categories);
  const brands = useSelector((state) => state.allBrand.brands);
  const products = useSelector((state) => state.allProducts.products);
  const subCategories = useSelector(
    (state) => state.allSubCategory.subCategory
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrands());
  }, []);

  const onSelectSubCategory = (selectedList) => {
    setSelectedSubIds(selectedList);
  };
  const onRemoveSubCAtegory = (selectedList) => {
    setSelectedSubIds(selectedList);
  };

  //   to changeColor from picker
  const changeColor = (color) => {
    console.log("color", color.hex);
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };

  //   to remove color
  const removeColor = (color) => {
    // eslint-disable-next-line no-unused-expressions
    const newColors = colors.filter((item) => {
      return item !== color;
    });
    setColors(newColors);
  };

  //   select category
  const onSelectCat = async (e) => {
    console.log("catt", e.target.value);
    if (e.target.value !== 0) {
      await dispatch(getSubCateogries(e.target.value));
    }
    setCatId(e.target.value);
  };

  useEffect(() => {
    if (catId !== 0) {
      setOptions(subCategories.data);
      console.log("options", options);
    }
  }, [catId]);

  // on select brand
  const onSelectBrand = (e) => {
    console.log("prand", e.target.value);
    setBrandId(e.target.value);
  };

  // change base 64 image to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  // send data to api
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageCover = dataURLtoFile(images[0], Math.random() + ".png");

    const newImages = Array.from(Array(Object.keys(images).length).keys()).map(
      (item, index) => {
        return dataURLtoFile(images[index], Math.random + ".png");
      }
    );
    const formData = new FormData();
    formData.append("title", proName);
    formData.append("description", proDesc);
    formData.append("price", priceBefor);
    formData.append("priceAfterDiscount", priceAfter);

    formData.append("quantity", qty);
    formData.append("imageCover", imageCover);
    formData.append("category", catId);
    formData.append("brand", brandId);
    newImages.map((img) => {
      return formData.append("images", img);
    });

    colors.map((color) => {
      return formData.append("colors", color);
    });
    selectedSubIds.map((item) => {
      return formData.append("subcategory", item._id);
    });
    console.log("avaliable colors>>>>>>>>>>>>>>>>>>>>.", colors);

    setLoading(true);
    await dispatch(createProduct(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (products.status === 201) {
        notify("product created successfully", "success");
      } else {
        notify("thete is an error during creation", "error");
      }
    }
  }, [loading]);
  return [
    images,
    setImages,
    proName,
    setProName,
    proDesc,
    setProDesc,
    priceAfter,
    priceBefor,
    setpriceAfter,
    setpriceBefor,
    qty,
    setQty,
    onSelectCat,
    categories,
    options,
    onSelectSubCategory,
    onSelectBrand,
    brands,
    colors,
    removeColor,
    showColor,
    setShowColor,
    changeColor,
    handleSubmit,
    onRemoveSubCAtegory
  ];
};

export default AddProductHook;
