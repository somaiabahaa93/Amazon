import React, { useState } from 'react'
import  { useEffect } from "react";
import notify from "../../hook/notificationHook"

import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategory,
} from "../../Redux/actions/categoryActions";
import { createSubCategory } from '../../Redux/actions/subCategoryActions';
const AdminAddSubCategoryHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!navigator.onLine) {
            notify("هناك مشكله فى الاتصال بالانترنت", "warn")
            return;
        }
        dispatch(getAllCategory());
    }, [])
    const [id, setID] = useState('0')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    //get last catgeory state from redux
    const category = useSelector(state => state.allCategory.categories)


    //get last sub catgeory state from redux
    const subCategory = useSelector(state => state.allSubCategory.subCategory)

    //on change dropdown menu
    const handelChange = (e) => {
        console.log(e.target.value)
        setID(e.target.value)
    }

    //to save name
    const onChangeName = (e) => {
        e.persist();
        setName(e.target.value)
    }
    //on save data 
    const handelSubmit = async (e) => {
        e.preventDefault();
        if (!navigator.onLine) {
            notify("هناك مشكله فى الاتصال بالانترنت", "warn")
            return;
        }
        if (id === "0" || name==="") {
            notify("there is an error in data", "warn")
            return;
        }
       

        setLoading(true)
        await dispatch(createSubCategory({
            name,
            category: id
        }))
        setLoading(false)

    }
    useEffect(() => {

        if (loading === false) {
            setName("")
            setID("0")
            if (subCategory)
                console.log(subCategory)
            if (subCategory.status === 201) {
                notify('item added successfully', "success")
            }
            else if (subCategory === "Error Error: Request failed with status code 400") {
                notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warn")
            }
            else {
                notify("هناك مشكله فى عملية الاضافة", "warn")
            }

            setLoading(true)
        }
    }, [loading])


    return [id, name, loading, category, subCategory, handelChange, handelSubmit, onChangeName]
};



export default AdminAddSubCategoryHook
