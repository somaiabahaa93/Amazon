import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import { useSelector, useDispatch } from "react-redux";
import { createCategory } from "../../Redux/actions/categoryActions";
import { ToastContainer } from 'react-toastify';
import notify from "../../hook/notificationHook";
const AdminAddCategoryHook = () => {
    const [img, setImage] = useState(avatar);
    const [selectedFile, setselectedFile] = useState('');
    const [name, setName] = useState("");
    const [loading,setLoading]=useState(true)
    const [isPress,setIsPress]=useState(false)
    const data=useSelector(state=>state.allCategory.category)
    const dispatch=useDispatch()
  
  // get selected image
    const onImageChange=(event)=>{
      if(event.target.files && event.target.files[0])
      {
          setImage(URL.createObjectURL(event.target.files[0]))
          setselectedFile(event.target.files[0])
      }
  
    }
  
  //   send data to API
    const handleSubmit=async(event)=>{
      event.preventDefault();
      if(name==="" || selectedFile==='')
      {
          notify("there is an error in uploaded data","warn")
          return;
      }
      const formData= new FormData()
      formData.append("name",name)
      formData.append("image",selectedFile)
     
      setLoading(true)
      setIsPress(true)
  
     await  dispatch(createCategory(formData))
     setLoading(false)
     
    }

    const setNameFn=(e)=>{
        
        setName(e.target.value)
    }

    useEffect(()=>{
      if(loading===false)
      {
          setName('')
          setImage(avatar)
          setselectedFile(null)
          setLoading(true)
          setTimeout(() => {
              setIsPress(false)
          }, 1000);
          console.log(data)
          if(data.status===201)
          {
      notify("item aded successfully","success")
          }
          else 
          {
              notify("there is an error at adding","error")
   
          }
      }    
    },[loading])
    return [img,name,onImageChange,handleSubmit,isPress,loading,setNameFn]
}

export default AdminAddCategoryHook
