import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import notify from "../../hook/notificationHook";
import { updateProduct } from "../../Redux/actions/productActions";

import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/actions/categoryActions";

import add from "../../images/add.png";
import { getAllBrands } from "../../Redux/actions/brandActions";
import {
  createProduct,
  getOneProduct,
} from "../../Redux/actions/productActions";
import { getSubCateogries } from "../../Redux/actions/subCategoryActions";

const EditProductHook = (id) => {
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
  const categories = useSelector((state) => state.allCategory.category);
  const brands = useSelector((state) => state.allBrand.brands);
  const products = useSelector((state) => state.allProducts.products);
  const updatedProduct = useSelector(
    (state) => state.allProducts.updateProduct
  );

  const subCategories = useSelector(
    (state) => state.allSubCategory.subCategory
  );
  const item = useSelector((state) => state.allProducts.oneProduct);

  console.log("item", item);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(id));
    dispatch(getAllCategory());
    dispatch(getAllBrands());
  }, []);

  useEffect(() => {
    if (item.data) {
      setProName(item.data.title);
      setProDesc(item.data.description);
      setpriceBefor(item.data.price);
      setQty(item.data.quantity);
      setCatId(item.data.category);
      setBrandId(item.data.brand);
      setColors(item.data.availableColors);
      setImages(item.data.images);
      setOptions(item.data.subcategory);
    }
  }, [item]);

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
    setCatId(e.target.value);
  };

  //   get subcategories of category
  useEffect(() => {
    const run = async () => {
      if (catId != 0) {
        console.log("catId", catId);
        await dispatch(getSubCateogries(catId));
      }
    };
    run();
  }, [catId]);

  //   change the subcategories values
  useEffect(() => {
    if (subCategories) setOptions(subCategories.data);
    console.log("subC", subCategories);
    setSelectedSubIds(subCategories.data);
  }, [subCategories]);

  // on select brand
  const onSelectBrand = (e) => {
    console.log("prand", e.target.value);
    setBrandId(e.target.value);
  };

  const onChangeProductName = (e) => {
    e.persist();
    setProName(e.target.value);
  };

  const onChangeProductDesc = (e) => {
    e.persist();
    setProDesc(e.target.value);
  };

  const onChangePriceBefor = (e) => {
    e.persist();
    setpriceBefor(e.target.value);
  };

  const onChangePriceAfter = (e) => {
    e.persist();
    setpriceAfter(e.target.value);
  };

  const onChangeProductQnty = (e) => {
    e.persist();
    setQty(e.target.value);
  };

  const onChangeProductColor = (e) => {
    e.persist();
    setShowColor(e.target.value);
  };

  //   change url to file
  const convertURLToFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
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
    // editing images befor sending 
    let imageCover;
    if (images[0].length <= 1000) {
      convertURLToFile(images[0]).then((val) => (imageCover = val));
    } else {
      imageCover = dataURLtoFile(images[0], Math.random() + ".png");
    }
    let itemImages = [];
    // convert all [] of images
    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[index].length <= 1000) {
        convertURLToFile(images[index]).then((val) => itemImages.push(val));
      } else {
        itemImages.push(dataURLtoFile(images[index], Math.random + ".png"));
      }
    });
    const formData = new FormData();
    formData.append("title", proName);
    formData.append("description", proDesc);
    formData.append("price", priceBefor);
    formData.append("quantity", qty);
    formData.append("category", catId);
    formData.append("brand", brandId);

// setTimeout(()=>{
  
// },1000)
   
formData.append("imageCover", imageCover);
itemImages.map((img) => {
  return formData.append("images", img);
});
    colors.map((color) => {
      return formData.append("availableColors", color);
    });
    selectedSubIds.map((item) => {
      return formData.append("subcategory", item._id);
    });
    // setTimeout(async()=>{
       
    // },1000)
    setLoading(true);
    await dispatch(updateProduct(id, formData));
    setLoading(false);
   
  };

  useEffect(() => {
    if (loading === false) {
      if (updatedProduct.status === 200) {
        notify("product updated successfully", "success");
      } else {
        notify("thete is an error during creation", "error");
      }
    }
  }, [loading]);
  return [
    images,
    setImages,
    proName,
    onChangeProductName,
    proDesc,
    priceAfter,
    priceBefor,
    qty,
    onSelectCat,
    categories,
    onChangeProductDesc,
    onChangePriceAfter,
    onChangePriceBefor,
    onChangeProductQnty,
    onChangeProductColor,
    options,
    onSelectSubCategory,
    onRemoveSubCAtegory,
    colors,
    onSelectBrand,
    brands,
    showColor,
    changeColor,
    handleSubmit,
    removeColor,
    catId,
    brandId,
  ];
};

export default EditProductHook;
