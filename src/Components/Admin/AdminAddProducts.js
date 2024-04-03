import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import { ToastContainer } from 'react-toastify';
import notify from "../../hook/notificationHook";


import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/actions/categoryActions";

import add from "../../images/add.png";
import { getAllBrands } from "../../Redux/actions/brandActions";
import { createProduct } from "../../Redux/actions/productActions";
import { getSubCateogries } from "../../Redux/actions/subCategoryActions";
const AdminAddProducts = () => {
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
  const categories = useSelector((state) => state.allCategory.category);
  const brands = useSelector((state) => state.allBrand.brands);
  const products = useSelector((state) => state.allProducts.products);
  const subCategories = useSelector((state) => state.allSubCategory.subCategory);



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrands());
  }, []);
  

  const onSelectSubCategory = (selectedList) => {
    
    setSelectedSubIds(selectedList)
  };
  const onRemoveSubCAtegory = (selectedList) => {
    setSelectedSubIds(selectedList)

  };

 

  //   to changeColor from picker
  const changeColor = (color) => {
    console.log("color", color.hex);
    setColors([...colors,color.hex])
    setShowColor(!showColor)
  };

//   to remove color 
const removeColor=(color)=>{
// eslint-disable-next-line no-unused-expressions
const newColors=colors.filter((item)=>{return item!==color})
setColors(newColors)
}

//   select category
const onSelectCat=async(e)=>{
console.log("catt",e.target.value)
if(e.target.value !== 0)
{
    await dispatch(getSubCateogries(e.target.value))
}
setCatId(e.target.value)

}

useEffect(()=>{
    if (catId!==0)
    {
        setOptions(subCategories.data)
        console.log("options",options)
    }
        },[catId])

// on select brand 
const onSelectBrand=(e)=>{
    console.log("prand",e.target.value)
    setBrandId(e.target.value)
    }

// change base 64 image to file 
function dataURLtoFile(dataurl, filename) {
 
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});
}

     // send data to api 
     const handleSubmit=async(e)=>{
        e.preventDefault()
        const imageCover=dataURLtoFile(images[0],Math.random()+'.png')
        
        const newImages=Array.from(Array(Object.keys(images).length).keys()).map((item,index)=>{
            return (dataURLtoFile(images[index],Math.random +".png"))
        })
        const formData=new FormData()
        formData.append("title",proName)
        formData.append("description",proDesc)
        formData.append("price",priceBefor)
        formData.append("quantity",qty)
        formData.append("imageCover",imageCover)
        formData.append("category",catId)
        formData.append("brand",brandId)
        newImages.map((img)=>{return (formData.append("images",img))})

        colors.map((color)=>{return (formData.append("availableColors",color))})
        selectedSubIds.map((item)=>{return (formData.append("subcategory",item._id))})


        setLoading(true)
       await dispatch(createProduct(formData))
       setLoading(false)
    }

useEffect(() => {
    if (loading === false) {
      
      if(products.status===201)
      {
        notify("product created successfully","success")
      }else
      {
        notify("thete is an error during creation","error")

      }
    }
  }, [loading]);
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            max={4}
            allowCrop={false}
            theme={"light"}
          />{" "}
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
            value={proName}
            onChange={(e) => setProName(e.target.value)}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            value={proDesc}
            onChange={(e) => setProDesc(e.target.value)}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            value={priceBefor}
            onChange={(e) => setpriceBefor(e.target.value)}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر المنتج"
            value={priceAfter}
            onChange={(e) => setpriceAfter(e.target.value)}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder=" الكميه المتاحه"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectCat}
          >
            <option value="0">التصنيف الرئيسي</option>
            {categories.data
              ? categories.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelectSubCategory}
            onRemove={onRemoveSubCAtegory}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectBrand}

          >
            <option value="0">الماركة</option>
            {brands.data
              ? brands.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div  className="mt-1 d-flex">
            { colors?(colors.map((color,index)=>{return( 
            <div
            onClick={()=>removeColor(color)} className="color ms-2 border  mt-1"
              style={{ backgroundColor: color }}
            ></div>)})):null}
           
            
            <img
              onClick={()=>setShowColor(!showColor)}
              src={add}
              alt=""
              width="30px"
              height="35px"
              className=""
            />
            {showColor === true ? (
              <CompactPicker onChangeComplete={changeColor} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
      </Row>
      <ToastContainer></ToastContainer>

    </div>
  );
};

export default AdminAddProducts;
