import  { useEffect, useState } from "react";
import avatar from "../../images/avatar.png";
import { useSelector, useDispatch } from "react-redux";
import { createBrand } from "../../Redux/actions/brandActions";
import notify from "../../hook/notificationHook";
const AdminAddBrandHook = () => {
    const [img, setImage] = useState(avatar);
    const [selectedFile, setselectedFile] = useState('');
    const [name, setName] = useState(" ");
    const [loading,setLoading]=useState(true)
    const [isPress,setIsPress]=useState(false)
    // const data=useSelector(state =>state.allBrand.brands)
    const brands = useSelector((state) => state.allBrand.brands);

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
        console.log("hiiiii")
        console.log("name>>>>>>>",name)        

      event.preventDefault();
      if( name === " " ||selectedFile ==='')
      {
        console.log("no name")

          notify("there is an error in uploaded data","warn")
          return;
      }


   
      const formData= new FormData()
      formData.append("name",name)
      formData.append("image",selectedFile)
     
      setLoading(true)
      setIsPress(true)
  
     await  dispatch(createBrand(formData))
     setLoading(false)
     
    }

    const setNameFn=(e)=>{
        e.persist()
        setName(e.target.value)
    }

    useEffect(()=>{
      if(loading === false)
      {
          setName('')
          setImage(avatar)
          setselectedFile(null)
          setLoading(true)
          setTimeout(() => {
              setIsPress(false)
          }, 1000);
          console.log("brandsHERE>>>>",brands)
          if(brands.status===201)
          {
      notify("item added successfully","success")
          }
          else 
          {
              notify("there is an error at adding","error")
   
          }
      }    
    },[loading])
    return [img,name,onImageChange,handleSubmit,isPress,loading,setNameFn]
}

export default AdminAddBrandHook
