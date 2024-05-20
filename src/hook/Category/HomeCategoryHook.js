import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getAllCategory } from "../../Redux/actions/categoryActions";
const HomeCategoryHook = () => {
    const categories=useSelector((state)=>state.allCategory.categories)
    const loading=useSelector((state)=>state.allCategory.loading)
    const dispatch=useDispatch()
const colors=["#ffd3e8","#f4dba5","#55cfdf","#0034ff","#ffd3e8"]
    useEffect(()=>{
dispatch(getAllCategory(5))
    },[])
    console.log("allCate>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.",categories)

    return[categories,loading,colors]
}

export default HomeCategoryHook
